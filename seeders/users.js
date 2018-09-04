'use strict';

// for passwords
const bcrypt = require('bcrypt');

module.exports = {
  up: function(queryInterface, Sequelize) {
    // declare users array (array of objects)
    let users = [];
    // apend manually created fake users
    users.push(
      {
        username: 'lancaster',
        email: 'andfresnedo@gmail.com',
        password: bcrypt.hashSync('adminbut6', 10),
        admin: true,
        sub: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'bob',
        email: 'bob@test.org',
        password: bcrypt.hashSync('bobbobbob', 10),
        admin: false,
        sub: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'sub',
        email: 'sub@subscriber.net',
        password: bcrypt.hashSync('subbing', 10),
        sub: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    );
    // append filler users
    for (let i = 0; i < 30; i++) {
      users.push(
        {
          username: `iamseed${i}`,
          email: `seed${i}@seed.net`,
          password: bcrypt.hashSync(`seed${i}seed`, 10),
          admin: false,
          sub: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      );
    }

    // return all users for insert
    return queryInterface.bulkInsert('users', users, {});
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
     */
    return queryInterface.bulkDelete('users');
  }
};
