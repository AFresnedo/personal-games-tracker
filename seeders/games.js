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
