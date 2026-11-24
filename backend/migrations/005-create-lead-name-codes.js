'use strict';

// Short-code tables used to build the Oracle lead name prefix:
//   <DEPARTMENT>-<PRODUCT>-<CHANNEL>[-<AREA>]   (Oracle appends "-<lead number>")
// "aliases" columns hold website values that should map to the row, separated by "|".
module.exports = {
  async up(queryInterface, Sequelize) {
    const timestamps = {
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
    };

    await queryInterface.createTable('lead_departments', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING(100), allowNull: false },
      code: { type: Sequelize.STRING(20), allowNull: false, unique: true },
      active: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
      ...timestamps,
    });

    await queryInterface.createTable('lead_products', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      departmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'lead_departments', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      name: { type: Sequelize.STRING(150), allowNull: false },
      code: { type: Sequelize.STRING(20), allowNull: false },
      // e.g. "brainnet:home" or "brainsoft:ERP Solutions|brainsoft:ERP"
      aliases: { type: Sequelize.TEXT, allowNull: true },
      active: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
      ...timestamps,
    });
    await queryInterface.addIndex('lead_products', ['departmentId', 'code'], {
      unique: true,
      name: 'lead_products_department_code_uq',
    });

    await queryInterface.createTable('lead_channels', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING(150), allowNull: false },
      code: { type: Sequelize.STRING(20), allowNull: false, unique: true },
      // "How did you hear about us?" values that map to this channel
      aliases: { type: Sequelize.TEXT, allowNull: true },
      // Channel used when the website value matches no row (exactly one row should be true)
      isDefault: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
      active: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
      ...timestamps,
    });

    await queryInterface.createTable('lead_areas', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING(150), allowNull: false, unique: true },
      code: { type: Sequelize.STRING(20), allowNull: false },
      zone: { type: Sequelize.STRING(100), allowNull: true },
      // Other spellings used on the website, e.g. "AIT|Iqbal Town"
      aliases: { type: Sequelize.TEXT, allowNull: true },
      active: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
      ...timestamps,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('lead_areas');
    await queryInterface.dropTable('lead_channels');
    await queryInterface.dropTable('lead_products');
    await queryInterface.dropTable('lead_departments');
  },
};
