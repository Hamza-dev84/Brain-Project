const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

/**
 * Send email using EJS template
 * attachments is OPTIONAL – existing calls will not break
 */
exports.sendTemplateMail = async ({ to, subject, template, data, replyTo, attachments = [] }) => {
  const templatePath = path.join(__dirname, `../emails/${template}.ejs`);

  const html = await ejs.renderFile(templatePath, data);

  return transporter.sendMail({
    from: `"Brain Website" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
    replyTo,
    attachments // ✅ added safely
  });
};
