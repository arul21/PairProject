'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      {
        CustomerId: 1,
        amount: '100000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CustomerId: 2,
        amount: '150000',
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
