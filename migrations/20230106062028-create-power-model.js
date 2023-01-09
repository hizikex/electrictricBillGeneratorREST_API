'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('powerModels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      district: {
        type: Sequelize.STRING
      },
      metreNo: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      monthlyMetreCount: {
        type: Sequelize.INTEGER
      },
      chargePerCount: {
        type: Sequelize.INTEGER
      },
      VAT: {
        type: Sequelize.DECIMAL
      },
      monthlyDue: {
        type: Sequelize.DECIMAL
      },
      amountPaid: {
        type: Sequelize.DOUBLE
      },
      balance: {
        type: Sequelize.DECIMAL
      },
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('powerModels');
  }
};