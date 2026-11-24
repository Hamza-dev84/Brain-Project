const BrainnetHomeEmail = require('../models/BrainnetHomeEmail');
const BrainnetContact = require('../models/BrainnetContact');
const BrainnetAvailability = require('../models/BrainnetAvailability');
const mailer = require('../core/mailer');
const ebsLead = require('../services/ebsLead.service');
const leadName = require('../services/leadName.service');
const { validateAvailability, sendValidationError } = require('../utils/leadValidation');

const packageCategory = (serviceType) =>
  serviceType === 'business'
    ? (process.env.EBS_BUSINESS_PACKAGE_CATEGORY || 'BrainNET.Services.WEB')
    : (process.env.EBS_HOME_PACKAGE_CATEGORY || 'BrainTEL.Services.Online');

// "Label [CODE]" for MySQL/email, or just the value when no label/same as value.
const withCode = (label, value) => {
  const l = (label || '').toString().trim();
  const v = (value || '').toString().trim();
  if (!v) return l || null;
  return l && l !== v ? `${l} [${v}]` : v;
};

// GET /api/brainnet/lead-sources  -> { success, items: [{ value: SOURCE_CODE, label: SOURCE_NAME }] }
exports.getLeadSources = async (req, res) => {
  const r = await ebsLead.getLeadSources('');
  if (!r.success) {
    console.error('[EBS] get_lead_sources failed:', r.error, r.data ? JSON.stringify(r.data) : '');
    return res.status(502).json({ success: false, error: 'Lead sources are unavailable right now' });
  }
  res.set('Cache-Control', 'public, max-age=300');
  res.json({ success: true, items: r.items.map(({ value, label }) => ({ value, label })) });
};

// GET /api/brainnet/packages?type=home|business
//   -> { success, items: [{ value: INVENTORY_ITEM_ID, label: ITEM_DESCRIPTION }] }
exports.getPackages = async (req, res) => {
  const serviceType = req.query.type === 'business' ? 'business' : 'home';
  const category = packageCategory(serviceType);
  const r = await ebsLead.getProductCatalog(category);
  console.log(`[EBS] packages type=${serviceType} category=${category} -> ${r.success ? r.items.length + ' items' : 'failed'}`);
  if (!r.success) {
    console.error('[EBS] get_product_catalog failed:', r.error, r.data ? JSON.stringify(r.data) : '');
    return res.status(502).json({ success: false, error: 'Packages are unavailable right now' });
  }
  res.set('Cache-Control', 'public, max-age=300');
  res.json({ success: true, items: r.items.map(({ value, label }) => ({ value, label })) });
};

exports.submitHomeEmail = async (req, res) => {
  try {
    const lead = await BrainnetHomeEmail.create({
      email: req.body.email
    });

    await mailer.sendTemplateMail({
      to: [
        process.env.BRAINNET_HOME_EMAIL

      ],
      subject: 'BrainNet Home Page Lead',
      template: 'brainnet_home_email',
      data: {
        email: lead.email,
        createdAt: new Date(lead.createdAt).toLocaleString()
      }
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};


exports.submitContact = async (req, res) => {
  try {
    const lead = await BrainnetContact.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      inquiryType: req.body.inquiryType,
      hearAboutUs: req.body.hearAboutUs,
      message: req.body.message
    });

    await mailer.sendTemplateMail({
      to: [
        process.env.BRAINNET_CONTACT_EMAIL

      ],
      subject: 'BrainNet Contact Form',
      template: 'brainnet_contact',
      replyTo: lead.email,
      data: {
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        inquiryType: lead.inquiryType,
        hearAboutUs: lead.hearAboutUs,
        message: lead.message,
        createdAt: new Date(lead.createdAt).toLocaleString()
      }
    });

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};



exports.submitAvailability = async (req, res) => {
  try {
    // 1) Required fields + formats
    const v = validateAvailability(req.body);
    if (!v.valid) return sendValidationError(res, v.errors);

    const b = { ...req.body, ...v.values };
    const serviceType = b.serviceType;

    // 2) Package / source must exist in Oracle. If Oracle can't be reached we accept the
    //    value as-is (the form shows fallback options in that case) so no lead is lost.
    const [catalog, sources] = await Promise.all([
      ebsLead.getProductCatalog(packageCategory(serviceType)),
      ebsLead.getLeadSources(''),
    ]);
    const pkg = catalog.success ? catalog.items.find((i) => i.value === b.package) : null;
    const src = sources.success ? sources.items.find((i) => i.value === b.referralSource) : null;

    const lookupErrors = {};
    if (catalog.success && catalog.items.length && !pkg) lookupErrors.package = 'Please select a valid package';
    if (sources.success && sources.items.length && !src) lookupErrors.referralSource = 'Please select a valid option';
    if (Object.keys(lookupErrors).length) return sendValidationError(res, lookupErrors);

    const packageText = pkg ? pkg.label : (b.packageLabel || b.package);
    const sourceText = src ? src.label : (b.referralSourceLabel || b.referralSource);

    // 3) Save + Oracle + email
    const lead = await BrainnetAvailability.create({
      area: b.area,
      serviceType,
      package: withCode(packageText, b.package),
      name: b.name,
      mobile: b.mobile,
      email: b.email,
      referralSource: withCode(sourceText, b.referralSource)
    });

    // Create the lead in Oracle EBS first so we can return its number.
    // A failure here is logged but does not fail the request (the lead is already saved in MySQL).
    let oracleLeadId = null;
    try {
      const ebs = await pushAvailabilityLeadToEbs(lead, b, serviceType, { pkg, src, packageText, sourceText });
      oracleLeadId = ebs.leadId;
    } catch (e) {
      console.error(`[EBS] BrainNet availability lead ${lead.id} crashed:`, e);
    }

    // Email failure must not fail the request: the lead is already in MySQL (and Oracle),
    // and an error here would make the user resubmit and create a duplicate lead.
    try {
    await mailer.sendTemplateMail({
      to: [
        process.env.BRAINNET_AVAILABILITY_EMAIL

      ],
      subject: 'BrainNet Check Availability',
      template: 'brainnet_availability',
      replyTo: b.email,
      data: {
        area: lead.area,
        serviceType: lead.serviceType,
        packageName: lead.package, // renamed to avoid JS reserved word confusion
        name: lead.name,
        mobile: lead.mobile,
        email: lead.email,
        referralSource: lead.referralSource,
        oracleLeadId,
        createdAt: new Date(lead.createdAt).toLocaleString()
      }
    });
    } catch (mailErr) {
      console.error(`[BrainNet availability] email for lead ${lead.id} failed:`, mailErr);
    }

    res.json({ success: true, leadNumber: oracleLeadId });
  } catch (err) {
    console.error('[BrainNet availability] 500:', err);
    if (!res.headersSent) {
      res.status(500).json({ success: false, error: 'Something went wrong while submitting your request. Please try again.' });
    }
  }
};

async function pushAvailabilityLeadToEbs(lead, b, serviceType, { pkg, src, packageText, sourceText }) {
  // Lead name prefix from our code tables, e.g. BF-RFI-SERP-A145 (Oracle appends the lead number)
  const name = await leadName.buildLeadNamePrefix({
    productKey: `brainnet:${serviceType}`,
    fallbackDepartmentCode: 'BF',
    hearAbout: sourceText,
    includeArea: true,
    areaName: b.area,
  });

  const r = await ebsLead.createWebLead({
    // Business leads are created with the business EBS user (EBS_BUSINESS_USERNAME / _PASSWORD)
    authProfile: serviceType === 'business' ? 'business' : 'default',
    name: b.name,
    companyName: b.name,
    phone: b.mobile,
    email: b.email,
    address1: b.area,
    city: process.env.EBS_LEAD_DEFAULT_CITY || 'Lahore',
    country: 'PK',
    categoryId: pkg && pkg.categoryId,          // falls back to EBS_LEAD_CATEGORY_ID
    inventoryItemId: pkg && pkg.value,          // falls back to EBS_LEAD_INVENTORY_ITEM_ID
    sourceCode: src && src.value,               // falls back to EBS_LEAD_SOURCE_CODE
    responseChannel: process.env.EBS_RESPONSE_CHANNEL,
    leadNamePrefix: name.prefix,
    description: packageText || `BrainNet ${serviceType} internet enquiry`,
    note: [
      `Website: Check Availability (${serviceType === 'business' ? 'Business' : 'Home'} Internet)`,
      `Area: ${b.area || '-'}`,
      `Package: ${packageText || '-'}`,
      !pkg && b.package && `Package not found in EBS catalog: ${b.package}`,
      `Heard about us: ${sourceText || '-'}`,
      !src && b.referralSource && `Source not found in EBS: ${b.referralSource}`,
    ].filter(Boolean).join('\n'),
  });

  const leadId = r.success && r.output && r.output.X_SALES_LEAD_ID ? String(r.output.X_SALES_LEAD_ID) : null;

  if (r.success) console.log(`[EBS] BrainNet availability lead ${lead.id} created, X_SALES_LEAD_ID=${leadId}:`, JSON.stringify(r.output));
  else console.error(`[EBS] BrainNet availability lead ${lead.id} failed:`, r.error, r.data ? JSON.stringify(r.data) : '');

  return { success: r.success, leadId, error: r.error };
}
