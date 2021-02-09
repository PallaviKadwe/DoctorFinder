'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Patients",
      [
        {
          fName: "Always",
          lName: "Sick",
          username:"alwayssick",
          password:"password",
          addr1: "642",
          addr2: "Glen Creek Street",
          city: "Chesapeake",
          state: "VA 23320",
          phone: "123-111-1234",
          email: "jb@somemail.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fName: "Seriously",
          lName: "Ill",
          username:"seriouslyill",
          password:"password",
          addr1: "8530",
          addr2: "Wilson Dr",
          city: "Milton",
          state: "MA 02186",
          phone: "123-111-1111",
          email: "mj@somemail.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fName: "intensive",
          lName: "Care",
          username:"intensivecare",
          password:"password",
          addr1: "99",
          addr2: "Brickell Ave",
          city: "Paramus",
          state: "NJ 07652",
          phone: "555-111-1111",
          email: "scooby@somemail.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fName: "Mister",
          lName: "Healthy",
          username:"misterhealthy",
          password:"password",
          addr1: "7110",
          addr2: "Shipley St",
          city: "Copperas Cove",
          state: "TX 76522",
          phone: "555-111-1111",
          email: "scooby@somemail.com",
          createdAt: new Date(),
          updatedAt: new Date()
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
