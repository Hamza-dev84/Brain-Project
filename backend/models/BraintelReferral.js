const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BraintelReferral = sequelize.define('BraintelReferral', {
  customerCode: DataTypes.STRING,
  referenceName: DataTypes.STRING,
  referencePhone: DataTypes.STRING,
  serviceType: DataTypes.STRING
}, {
  tableName: 'braintel_referrals'
});

module.exports = BraintelReferral;
