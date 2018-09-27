'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('GridOrders', [
      {
        GridId: 1,
        ScheduleOrderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        GridId: 2,
        ScheduleOrderId: 1,
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
