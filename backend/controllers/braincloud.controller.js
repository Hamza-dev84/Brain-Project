const BrainCloudInquiry = require('../models/BrainCloudInquiry');
const BrainCloudContact = require('../models/BrainCloudContact');
const mailer = require('../core/mailer');

exports.submitInquiry = async (req, res) => {
  try {

    const lead = await BrainCloudInquiry.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      company: req.body.company,
      service: req.body.service,
      heardAboutUs: req.body.heardAboutUs,
      message: req.body.message,
      intent: req.body.intent
    });

    await mailer.sendTemplateMail({
      to: [
        process.env.BRAINCLOUD_INQUIRY_EMAIL
      ],
      subject: 'BrainCloud Inquiry Form',
      template: 'braincloud_inquiry',
      replyTo: lead.email,
      data: {
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        company: lead.company,
        service: lead.service,
        heardAboutUs: lead.heardAboutUs,
        intent: lead.intent,
        message: lead.message,
        createdAt: new Date(lead.createdAt).toLocaleString()
      }
    });

    return res.json({
      success: true,
      message: 'Inquiry submitted successfully'
    });

  } catch (err) {

    console.error('BrainCloud Inquiry Error:', err);

    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
};


exports.submitContact = async (req, res) => {
  try {

    const lead = await BrainCloudContact.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      subject: req.body.subject,
      source: req.body.source,
      message: req.body.message
    });

    await mailer.sendTemplateMail({
      to: [
        process.env.BRAINCLOUD_CONTACT_EMAIL
      ],
      subject: 'BrainCloud Contact Form',
      template: 'braincloud_contact',
      replyTo: lead.email,
      data: {
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        subject: lead.subject,
        source: lead.source,
        message: lead.message,
        createdAt: new Date(lead.createdAt).toLocaleString()
      }
    });

    return res.json({
      success: true,
      message: 'Contact request submitted successfully'
    });

  } catch (err) {

    console.error('BrainCloud Contact Error:', err);

    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
};