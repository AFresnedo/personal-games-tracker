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
    return queryInterface.bulkInsert('played_games', [
    {
      gameId: 2,
      userId: 2,
      rating: 3,
      notes: 'these are notes!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      gameId: 3,
      userId: 1,
      rating: 9,
      notes: '9 rating is pretty high at time of writing',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      gameId: 4,
      userId: 1,
      rating: 1,
      notes: '1 rating is always going to be low',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      gameId: 4,
      userId: 2,
      rating: 1,
      notes: '1 rating is always going to be low',
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
    return queryInterface.bulkDelete('played_games');
  }
};
