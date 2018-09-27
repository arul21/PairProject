'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customers', [{
      name: 'Bambang',
      phone: '0817111723',
      email: 'peace1spirit@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Agung',
      phone: '0817132555',
      email: 'agung@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Koshasi',
      phone: '0817132799',
      email: 'koshasi@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Koshasi',
      phone: '081714444',
      email: 'koshasi@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mukmin',
      phone: '0817132555',
      email: 'mukmin@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Siti',
      phone: '0817133333',
      email: 'siti@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Johan',
      phone: '08171311111',
      email: 'johan@gmail.com',
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
