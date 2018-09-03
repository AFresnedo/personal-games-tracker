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
    // declare tuples to add to wishes
    wishes = Array(80).fill();
    wishes.map( (tuple, i) => {
      // pick a game to wish
      let wishedGame = gameTuples[i % gameTuples.length].id;
      // pick a wisher
      let wisher = userTuples[i % userTuples.length].id;
      // create wish
      let wish = {
        gameId: wishedGame,
        userId: wisher,
        hype: Math.floor(Math.random() * 10) + 1;
        notes: 'this wish was dynamically generated',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      return wish;
    });


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
