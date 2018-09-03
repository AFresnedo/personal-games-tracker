/*
Async & Await:
Await is used to "pause script" until promise is returned. Async tells
javascript that async-like functionality is to be enabled in the scope.
*/
'use strict';

module.exports = {
  up: async function(queryInterface) {

    return queryInterface.bulkInsert('wishes', [
    {
      gameId: 1,
      userId: 2,
      hype: 3,
      notes: 'these are notes!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      gameId: 1,
      userId: 1,
      hype: 9,
      notes: '9 hype is pretty high at time of writing',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      gameId: 2,
      userId: 1,
      hype: 1,
      notes: '1 hype is always going to be low',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: function(queryInterface) {
    return queryInterface.bulkDelete('wishes');
  }
};
