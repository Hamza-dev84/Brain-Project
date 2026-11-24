const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BraintelResume = sequelize.define('BraintelResume', {
  fullName: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  position: DataTypes.STRING,
  coverLetter: DataTypes.TEXT,
  resume: DataTypes.STRING
}, {
  tableName: 'braintel_resumes'
});

module.exports = BraintelResume;
