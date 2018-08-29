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
        short: 'FPS'
      },
      {
        long: 'Role-Playing Game',
        short: 'RPG'
      },
      {
        long: 'Action Role-Playing Game',
        short: 'Arpg'
      },
      {
        long: 'Strategy Game',
        short: null
      },
      {
        long: 'Multiplayer Online Battle Arena',
        short: 'MOBA'
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
  }
};
