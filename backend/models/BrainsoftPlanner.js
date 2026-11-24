const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BrainsoftPlanner = sequelize.define('BrainsoftPlanner', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  hearAboutUs: DataTypes.STRING,
  projectType: DataTypes.STRING,
  serviceName: DataTypes.STRING,
  phone: DataTypes.STRING,
  hearAboutUs: DataTypes.STRING,
  selectedFeatures: DataTypes.JSON,
  message: DataTypes.TEXT
}, {
  tableName: 'brainsoft_planner'
});

module.exports = BrainsoftPlanner;
