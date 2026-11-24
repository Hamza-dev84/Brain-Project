'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('braintel_resumes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: Sequelize.STRING,
      email: Sequelize.STRING,
      phone: Sequelize.STRING,
      position: Sequelize.STRING,
      coverLetter: Sequelize.TEXT,
      resume: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('braintel_resumes');
  }
};
