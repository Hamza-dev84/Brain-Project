const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BrainnetAvailability = sequelize.define('BrainnetAvailability', {
  area: DataTypes.STRING,
  serviceType: DataTypes.STRING,
  package: DataTypes.STRING,
  name: DataTypes.STRING,
  mobile: DataTypes.STRING,
  email: DataTypes.STRING,
  referralSource: DataTypes.STRING
}, {
  tableName: 'brainnet_availability'
});

module.exports = BrainnetAvailability;
