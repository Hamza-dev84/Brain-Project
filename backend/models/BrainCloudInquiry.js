const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BrainCloudInquiry = sequelize.define('BrainCloudInquiry', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  company: DataTypes.STRING,
  service: DataTypes.STRING,
  heardAboutUs: DataTypes.STRING,
  message: DataTypes.TEXT,
  intent: DataTypes.STRING
}, {
  tableName: 'braincloud_inquiries'
});

module.exports = BrainCloudInquiry;