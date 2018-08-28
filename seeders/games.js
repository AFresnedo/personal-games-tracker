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
    return queryInterface.bulkInsert('games', [{
      title: 'bazooka blam',
      release: '2007',
      genre: 'first person shooter',
      style: ['arcade', 'cartooney', 'comical'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'The Whiskey Stone',
      githubLink: 'https://github.com/scottheron/whisky',
      deployedLink: 'https://whiskymatch.herokuapp.com/',
      description: 'This is a web app that lets a user browse through single malt Scottish whiskies, favorite the ones they like and add tags their choices. The app datascapes from a whisky database to gather names, ages and tasting notes for each whisky.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'You Are Pizza',
      githubLink: 'https://github.com/thomasvaeth/ga-pizza',
      deployedLink: 'http://www.youarepizza.com/',
      description: 'You Are Pizza is not about finding pizzerias, but about keeping track of all the pizza you have tried. I got the idea from a phrase about you are what you eat and I like to eat pizza. I was also lucky enough for Gustavo Zambelli to provide all the pizza images for the project.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'RSVPtree',
      githubLink: 'https://github.com/BrittanyIRL/rsvpTree',
      deployedLink: 'https://rsvptree.herokuapp.com/',
      description: 'The purpose of it is to host rsvp tracking for wedding planning specifically. It details all the necessary items with which to then plan a wedding.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
