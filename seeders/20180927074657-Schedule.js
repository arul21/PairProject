'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Schedules', [
      {
        time1: '09:00',
        time2: '10:00',
        price: '50000',
        CourtId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        time1: '10:00',
        time2: '11:00',
        price: '50000',
        CourtId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        time1: '11:00',
        time2: '12:00',
        price: '50000',
        CourtId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        time1: '12:00',
        time2: '13:00',
        price: '50000',
        CourtId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        time1: '13:00',
        time2: '14:00',
        price: '50000',
        CourtId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        time1: '15:00',
        time2: '16:00',
        price: '50000',
        CourtId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        time1: '17:00',
        time2: '18:00',
        price: '50000',
        CourtId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
