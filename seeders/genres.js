'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('genres', [
      {
        long: 'First Person Shooter',
        short: 'FPS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        long: 'Role-Playing Game',
        short: 'RPG',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        long: 'Action Role-Playing Game',
        short: 'Arpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        long: 'Strategy Game',
        short: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        long: 'Multiplayer Online Battle Arena',
        short: 'MOBA',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('genres', null, {});
  }
};
