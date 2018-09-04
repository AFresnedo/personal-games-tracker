/*
Async, Promise, & Await:
Await is used to "pause script" until Promise is returned. Async tells
javascript that async-like functionality is to be enabled in the function.
*/
'use strict';

// import models
let models = require('../models');

module.exports = {
  up: async function(queryInterface, Sequelize) {

    // TODO refactor fetching tuples to run in parallel
    // get "limit" amount of random game tuples
    let gameTuples = await models.game.findAll(
      {
        limit: 50,
        order: Sequelize.fn('RANDOM')
      });
    // get "limit" amount of random user tuples
    let userTuples = await models.user.findAll(
      {
        limit: 20,
        order: Sequelize.fn('RANDOM')
      });
    // declare tuples to add to played_games
    let played_games = Array(80).fill(-1);
    // fill played_games with tuples
    played_games = played_games.map( (tuple, i) => {
      // pick a game to record
      let recordedGame = gameTuples[i % gameTuples.length].id;
      // pick a recorder
      let recorder = userTuples[i % userTuples.length].id;
      // create record
      let record = {
        gameId: recordedGame,
        userId: recorder,
        rating: Math.floor(Math.random() * 10) + 1,
        notes: 'this record was dynamically generated',
        createdAt: new Date(),
        updatedAt: new Date()
      };
      // return record for map to place
      return record;
    });
    return queryInterface.bulkInsert('played_games', played_games, {});
  },

  down: function(queryInterface) {
    return queryInterface.bulkDelete('played_games');
  }
};
