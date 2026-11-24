'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('brainnet_availability', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      area: Sequelize.STRING,
      serviceType: Sequelize.STRING,
      package: Sequelize.STRING,
      name: Sequelize.STRING,
      mobile: Sequelize.STRING,
      email: Sequelize.STRING,
      referralSource: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('brainnet_availability');
  }
};
