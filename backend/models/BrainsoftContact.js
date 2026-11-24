const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BrainsoftContact = sequelize.define('BrainsoftContact', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  inquiryType: DataTypes.STRING,
  hearAboutUs: DataTypes.STRING, // ✅ added
  message: DataTypes.TEXT
}, {
  tableName: 'brainsoft_contacts'
});

module.exports = BrainsoftContact;
