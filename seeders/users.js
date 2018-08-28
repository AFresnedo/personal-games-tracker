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
    return queryInterface.bulkInsert('users', [
    {
      username: 'lancaster',
      email: 'andfresnedo@gmail.com',
      password: 'adminbut6',
      admin: true,
      sub: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'bob',
      email: 'bob@test.org',
      password: 'bobbobbob',
      admin: false,
      sub: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'sub',
      email: 'sub',
      password: 'subbing',
      sub: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
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
