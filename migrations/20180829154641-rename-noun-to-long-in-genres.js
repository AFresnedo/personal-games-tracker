'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('genres', 'noun', 'long');

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('genres', 'long', 'noun');
  }
};
