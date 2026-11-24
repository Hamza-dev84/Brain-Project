const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BsmsCampaign = sequelize.define('BsmsCampaign', {
  referral: DataTypes.STRING,
  secpRegistered: DataTypes.STRING,
  smsRequired: DataTypes.INTEGER,
  frequency: DataTypes.STRING,
  phone: DataTypes.STRING,
  fullName: DataTypes.STRING,
  service: DataTypes.STRING
}, {
  tableName: 'bsms_campaigns'
});

module.exports = BsmsCampaign;