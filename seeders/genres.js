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
        noun: 'First Person Shooter'
      },
      {
        noun: 'Role-Playing Game'
      },
      {
        noun: 'Action Role-Playing Game'
      },
      {
        noun: 'Strategy Game'
      },
      {
        noun: 'Multiplayer Online Battle Arena'
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
