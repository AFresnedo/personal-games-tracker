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
    return queryInterface.bulkInsert('wishes', [
    {
      gameId: 1,
      userId: 2,
      hype: 3,
      notes: 'these are notes!'
    },
    {
      gameId: 1,
      userId: 1,
      hype: 9,
      notes: '9 hype is pretty high at time of writing'
    },
    {
      gameId: 2,
      userId: 1,
      hype: 1,
      notes: '1 hype is always going to be low'
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
