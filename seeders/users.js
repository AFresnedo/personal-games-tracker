'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    // declare users array (array of objects)
    let users = [];
    // apend manually created fake users
    users.push(
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
        email: 'sub@subscriber.net',
        password: 'subbing',
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
          password: `seed${i}`,
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
