const BsmsCampaign = require('../models/BsmsCampaign');
const BsmsContact = require('../models/BsmsContact');
const mailer = require('../core/mailer');

exports.submitCampaign = async (req, res) => {
  try {
    const lead = await BsmsCampaign.create(req.body);

    await mailer.sendTemplateMail({
      to: [
        process.env.BSMS_CAMPAIGN_EMAIL
      ],
      subject: 'BSMS Campaign Form Submission',
      template: 'bsms_campaign',
      replyTo: req.body.email, // remove if email is no longer sent
      data: {
        referral: lead.referral,
        secpRegistered: lead.secpRegistered,
        smsRequired: lead.smsRequired,
        frequency: lead.frequency,
        phone: lead.phone,
        fullName: lead.fullName,
        service: lead.service,
        createdAt: new Date(lead.createdAt).toLocaleString()
      }
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};


exports.submitContact = async (req, res) => {
  try {
    const lead = await BsmsContact.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      inquiryType: req.body.inquiryType,
      hearAboutUs: req.body.hearAboutUs,
      message: req.body.message
    });

    await mailer.sendTemplateMail({
      to: [
        process.env.BSMS_CONTACT_EMAIL

      ],
      subject: 'BSMS Contact Form',
      template: 'bsms_contact',
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


