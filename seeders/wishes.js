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
        limit: 200,
        order: Sequelize.fn('RANDOM')
      });
    // get all users, so they all have wishes
    let userTuples = await models.user.findAll(
      {
        order: Sequelize.fn('RANDOM')
      });
    // declare tuples to add to wishes
    let wishes = Array(80).fill(-1);
    // fill wishes with tuples
    wishes = wishes.map( (tuple, i) => {
      // pick a game to wish
      let wishedGame = gameTuples[i % gameTuples.length].id;
      // pick a wisher
      let wisher = userTuples[i % userTuples.length].id;
      // create wish
      let wish = {
        gameId: wishedGame,
        userId: wisher,
        hype: Math.floor(Math.random() * 10) + 1,
        notes: 'this wish was dynamically generated',
        createdAt: new Date(),
        updatedAt: new Date()
      };
      // return wish for map to place
      return wish;
    });
    return queryInterface.bulkInsert('wishes', wishes, {});
  },

  down: function(queryInterface) {
    return queryInterface.bulkDelete('wishes');
  }
};
