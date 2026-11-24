const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BsmsContact = sequelize.define('BsmsContact', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  inquiryType: DataTypes.STRING,   // ✅ added
  hearAboutUs: DataTypes.STRING,
  message: DataTypes.TEXT
}, {
  tableName: 'bsms_contacts'
});

module.exports = BsmsContact;
