const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const BrainnetHomeEmail = sequelize.define('BrainnetHomeEmail', {
  email: DataTypes.STRING
}, {
  tableName: 'brainnet_home_emails'
});

module.exports = BrainnetHomeEmail;
