'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('brainsoft_planner', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      hearAboutUs: Sequelize.STRING,
      projectType: Sequelize.STRING,
      serviceName: Sequelize.STRING,
      selectedFeatures: Sequelize.JSON,
      message: Sequelize.TEXT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('brainsoft_planner');
  }
};
