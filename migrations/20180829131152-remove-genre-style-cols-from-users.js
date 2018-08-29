'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.removeColumn('games', 'style')
      .then(function() {
        return queryInterface.removeColumn('games', 'genre');
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.addColumn('games', 'style', Sequelize.STRING)
      .then(function() {
        return queryInterface.addColumn('games', 'genre', Sequelize.STRING);
    });
  }
};
