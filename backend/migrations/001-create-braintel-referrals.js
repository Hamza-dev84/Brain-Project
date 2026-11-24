'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('braintel_referrals', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      customerCode: Sequelize.STRING,
      referenceName: Sequelize.STRING,
      referencePhone: Sequelize.STRING,
      serviceType: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('braintel_referrals');
  }
};
