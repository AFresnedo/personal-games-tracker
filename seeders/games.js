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
