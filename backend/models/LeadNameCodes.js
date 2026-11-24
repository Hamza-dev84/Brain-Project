const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// Short-code tables for the Oracle lead name (see migrations/005-create-lead-name-codes.js)

const LeadDepartment = sequelize.define('LeadDepartment', {
  name: DataTypes.STRING,
  code: DataTypes.STRING,
  active: DataTypes.BOOLEAN
}, {
  tableName: 'lead_departments'
});

const LeadProduct = sequelize.define('LeadProduct', {
  departmentId: DataTypes.INTEGER,
  name: DataTypes.STRING,
  code: DataTypes.STRING,
  aliases: DataTypes.TEXT,
  active: DataTypes.BOOLEAN
}, {
  tableName: 'lead_products'
});

const LeadChannel = sequelize.define('LeadChannel', {
  name: DataTypes.STRING,
  code: DataTypes.STRING,
  aliases: DataTypes.TEXT,
  isDefault: DataTypes.BOOLEAN,
  active: DataTypes.BOOLEAN
}, {
  tableName: 'lead_channels'
});

const LeadArea = sequelize.define('LeadArea', {
  name: DataTypes.STRING,
  code: DataTypes.STRING,
  zone: DataTypes.STRING,
  aliases: DataTypes.TEXT,
  active: DataTypes.BOOLEAN
}, {
  tableName: 'lead_areas'
});

LeadProduct.belongsTo(LeadDepartment, { foreignKey: 'departmentId', as: 'department' });
LeadDepartment.hasMany(LeadProduct, { foreignKey: 'departmentId', as: 'products' });

module.exports = { LeadDepartment, LeadProduct, LeadChannel, LeadArea };
