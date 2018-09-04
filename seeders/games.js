require('dotenv').config();

'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {

    // declare games tuples array
    let games = [];

    // add manual seeds
    games.push(
      {
        title: 'bazooka blam',
        release: '2007',
        dev: 'onyx games',
        pub: 'money grubber 2000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'armsgeddon',
        release: '1999',
        dev: 'casuals',
        pub: 'angels',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'the sky is falling',
        release: '2001',
        dev: 'unoriginals',
        pub: 'the clueless',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'happy days',
        release: '2015',
        dev: 'gingerbread men',
        pub: 'unicorns',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'darkest days',
        release: '2010',
        dev: 'depressed people',
        pub: 'opportunists',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    );

    // read names, create an array of "game name" elements
    let lines = require('fs').readFileSync(process.env.FILE_PATH, 'utf-8')
      .split('\n')
      .filter(Boolean);

    // add seeds from file
    lines.forEach( line => {
      console.log(line);
      games.push(
        {
          title: line,
          release: 'tbd',
          dev: 'tbd',
          pub: 'tbd',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      );
    });
    return queryInterface.bulkInsert('games', games, {});
  },

  down: function(queryInterface) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
     */
    return queryInterface.bulkDelete('games', null, {});
  }
};
