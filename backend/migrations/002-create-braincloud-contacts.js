'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('braincloud_contacts', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      name: Sequelize.STRING,
      email: Sequelize.STRING,
      phone: Sequelize.STRING,
      subject: Sequelize.STRING,
      source: Sequelize.STRING,
      message: Sequelize.TEXT,

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('braincloud_contacts');
  }
};