'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Specialities",
      [
        {
          name: "Pediatrics",
        },
        {
          name: "Dermatology",
        },
        {
          name: "Family Medicine",
        },
        {
          name: "Gynaecology",
        },
        {
          name: "Orthopaedics",
        },
        {
          name: "Psychiatry",
        },
        {
          name: "Obstretrics",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
