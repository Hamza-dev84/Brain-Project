'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('braincloud_inquiries', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      name: Sequelize.STRING,
      email: Sequelize.STRING,
      phone: Sequelize.STRING,
      company: Sequelize.STRING,
      service: Sequelize.STRING,
      message: Sequelize.TEXT,
      intent: Sequelize.STRING,

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('braincloud_inquiries');
  }
};