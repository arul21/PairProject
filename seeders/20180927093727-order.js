'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      {
        GridId: 1,
        CustomerId: 1,
        amount: '100000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        GridId: 2,
        CustomerId: 2,
        amount: '150000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        GridId: 1,
        CustomerId: 3,
        amount: '50000',
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