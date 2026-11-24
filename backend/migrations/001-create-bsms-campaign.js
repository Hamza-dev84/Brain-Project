'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bsms_campaigns', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      referral: Sequelize.STRING,
      secpRegistered: Sequelize.STRING,
      smsRequired: Sequelize.INTEGER,
      frequency: Sequelize.STRING,
      phone: Sequelize.STRING,
      fullName: Sequelize.STRING,

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('bsms_campaigns');
  }
};