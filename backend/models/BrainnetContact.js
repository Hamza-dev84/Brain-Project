const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BrainnetContact = sequelize.define('BrainnetContact', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  inquiryType: DataTypes.STRING,   // ✅ added
  hearAboutUs: DataTypes.STRING,   // ✅ added
  message: DataTypes.TEXT
}, {
  tableName: 'brainnet_contacts'
});

module.exports = BrainnetContact;
