'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('brainnet_home_emails', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      email: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('brainnet_home_emails');
  }
};
