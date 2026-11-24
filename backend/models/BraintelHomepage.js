const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BrainTelHomepage = sequelize.define('BrainTelHomepage', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  inquiryType: DataTypes.STRING,
  hearAboutUs: DataTypes.STRING,
  message: DataTypes.TEXT
}, {
  tableName: 'braintel_homepage'
});

module.exports = BrainTelHomepage;
