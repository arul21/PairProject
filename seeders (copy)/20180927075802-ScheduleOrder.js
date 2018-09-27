'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ScheduleOrders', [
      {
        ScheduleId: 1,
        OrderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ScheduleId: 2,
        OrderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ScheduleId: 1,
        OrderId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ScheduleId: 2,
        OrderId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ScheduleId: 3,
        OrderId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ScheduleId: 4,
        OrderId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ScheduleId: 5,
        OrderId: 3,
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
