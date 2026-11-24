const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BrainTelContact = sequelize.define('BrainTelContact', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  inquiryType: DataTypes.STRING,
  hearAboutUs: DataTypes.STRING,
  message: DataTypes.TEXT
}, {
  tableName: 'braintel_contacts'
});

module.exports = BrainTelContact;
