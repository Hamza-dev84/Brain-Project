const BrainsoftPlanner = require('../models/BrainsoftPlanner');
const BrainsoftContact = require('../models/BrainsoftContact');
const mailer = require('../core/mailer');
const ebsLead = require('../services/ebsLead.service');
const leadName = require('../services/leadName.service');
const { validateBrainsoftHero, validateBrainsoftPlanner, sendValidationError } = require('../utils/leadValidation');
//const path = require('path');

exports.submitPlanner = async (req, res) => {
  try {
    // Hero "Free Consultation" form creates an Oracle lead, so everything is required there.
    // The older project-planner proposal modal has no phone field and keeps its lighter rules.
    const isHero = req.body && req.body.formType === 'hero';
    const v = isHero ? validateBrainsoftHero(req.body) : validateBrainsoftPlanner(req.body);
    if (!v.valid) return sendValidationError(res, v.errors);
    Object.assign(req.body, v.values);

    const lead = await BrainsoftPlanner.create({
      name: req.body.name,
      email: req.body.email,
      hearAboutUs: req.body.hearAboutUs || req.body.hearAbout,
      phone: req.body.phone,
      projectType: req.body.projectType,
      serviceName: req.body.serviceName || req.body.service,
      selectedFeatures: req.body.selectedFeatures,
      message: req.body.message
    });

    try {
    await mailer.sendTemplateMail({
      to: [
        process.env.BRAINSOFT_PLANNER_EMAIL

      ],
      subject: 'BrainSoft Project Planner Submission',
      template: 'brainsoft_planner',
      replyTo: lead.email,
      data: {
        name: lead.name,
        email: lead.email,
        hearAboutUs: lead.hearAboutUs,
        phone: lead.phone,
        projectType: lead.projectType,
        serviceName: lead.serviceName,
        selectedFeatures: lead.selectedFeatures,
        message: lead.message,
        createdAt: new Date(lead.createdAt).toLocaleString()
      }
    });
    } catch (mailErr) {
      // Lead is saved; don't make the user resubmit (that would duplicate it).
      console.error(`[BrainSoft planner] email for lead ${lead.id} failed:`, mailErr);
    }

    res.json({ success: true });

    // Push to Oracle EBS in the background — never blocks or fails the website response.
    const service = req.body.service || req.body.serviceName || 'Software Services';
    const hearAbout = req.body.hearAbout || req.body.hearAboutUs || '';
    leadName.buildLeadNamePrefix({
      productKey: `brainsoft:${service}`,
      fallbackDepartmentCode: 'BS',
      hearAbout,
      includeArea: false, // BrainSoft lead names have no location code
    }).then((name) => ebsLead.createWebLead({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      leadNamePrefix: name.prefix,
      description: `Website enquiry - BrainSoft - ${service}`,
      note: [
        `Service: ${service}`,
        hearAbout && `Heard about us: ${hearAbout}`,
        req.body.message && `Message: ${req.body.message}`,
      ].filter(Boolean).join('\n'),
    })).then((r) => {
      if (r.success) console.log(`[EBS] BrainSoft lead ${lead.id} created:`, JSON.stringify(r.output || r.data));
      else console.error(`[EBS] BrainSoft lead ${lead.id} failed:`, r.error, r.data ? JSON.stringify(r.data) : '');
    }).catch((e) => console.error(`[EBS] BrainSoft lead ${lead.id} crashed:`, e));

  } catch (err) {
    console.error('[BrainSoft planner] 500:', err);
    if (!res.headersSent) {
      res.status(500).json({ success: false, error: 'Something went wrong while submitting your request. Please try again.' });
    }
  }
};


exports.submitContact = async (req, res) => {
  try {
    const lead = await BrainsoftContact.create({
      name: req.body.name,
      email: req.body.email,
      inquiryType: req.body.inquiryType,
      hearAboutUs: req.body.hearAboutUs,
      message: req.body.message
    });

    await mailer.sendTemplateMail({
      to: [
        process.env.BRAINSOFT_CONTACT_EMAIL

      ],
      subject: 'BrainSoft Contact Form',
      template: 'brainsoft_contact',
      replyTo: lead.email,
      data: {
        name: lead.name,
        email: lead.email,
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
