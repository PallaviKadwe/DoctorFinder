'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DoctorPatients', 
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        doctorId: {
          type: Sequelize.INTEGER
        },
        patientId: {
          type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        }
      },
      {
        uniqueKeys: {
          actions_unique: {
            fields: ["doctorId", "patientId"],
          },
        },
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DoctorPatients');
  }
};