const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BrainCloudContact = sequelize.define('BrainCloudContact', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  subject: DataTypes.STRING,
  source: DataTypes.STRING,
  message: DataTypes.TEXT
}, {
  tableName: 'braincloud_contacts'
});

module.exports = BrainCloudContact;