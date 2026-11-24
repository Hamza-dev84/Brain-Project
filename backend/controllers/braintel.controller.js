const BraintelReferral = require('../models/BraintelReferral');
const BrainTelHomepage = require('../models/BraintelHomepage');
const BrainTelContact = require('../models/BraintelContact');
const BraintelResume = require('../models/BraintelResume');
const path = require('path');
const mailer = require('../core/mailer');

exports.submitReferral = async (req, res) => {
  try {
    const lead = await BraintelReferral.create(req.body);

    await mailer.sendTemplateMail({
      to: [
        process.env.BRAINTEL_REFERRAL_EMAIL

      ],
      subject: 'BrainTel Referral Form',
      template: 'braintel_referral',
      data: {
        ...lead.toJSON(),
        createdAt: new Date(lead.createdAt).toLocaleString()
      }
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.submitHomepage = async (req, res) => {
  try {
    const lead = await BrainTelHomepage.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      inquiryType: req.body.inquiryType,
      hearAboutUs: req.body.hearAboutUs,
      message: req.body.message
    });

    await mailer.sendTemplateMail({
      to: [
        process.env.BRAINTEL_HOMEPAGE_EMAIL

      ],
      subject: 'BrainTel Homepage Lead',
      template: 'braintel_homepage',
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

exports.submitContact = async (req, res) => {
  try {
    const lead = await BrainTelContact.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      inquiryType: req.body.inquiryType,
      hearAboutUs: req.body.hearAboutUs,
      message: req.body.message
    });

    await mailer.sendTemplateMail({
      to: [
        process.env.BRAINTEL_CONTACT_EMAIL

      ],
      subject: 'BrainTel Contact Form',
      template: 'braintel_contact',
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


exports.submitResume = async (req, res) => {
  try {
    const resumePath = req.file ? req.file.path : null;

    const lead = await BraintelResume.create({
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      position: req.body.position,
      coverLetter: req.body.coverLetter,
      resume: resumePath // ✅ store full path
    });

    await mailer.sendTemplateMail({
      to: [
        process.env.BRAINTEL_RESUME_EMAIL

      ],
      subject: 'BrainTel Job Application',
      template: 'braintel_resume',
      replyTo: lead.email,
      data: {
        fullName: lead.fullName,
        email: lead.email,
        phone: lead.phone,
        position: lead.position,
        coverLetter: lead.coverLetter,
        resumePath: lead.resume,
        resumeFile: lead.resume ? path.basename(lead.resume) : null,
        createdAt: new Date(lead.createdAt).toLocaleString()
      },
      attachments: lead.resume ? [
        {
          filename: path.basename(lead.resume),
          path: lead.resume
        }
      ] : []
    });

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};