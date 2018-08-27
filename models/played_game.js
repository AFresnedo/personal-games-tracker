'use strict';
module.exports = (sequelize, DataTypes) => {
  var played_game = sequelize.define('played_game', {
    gameId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {});
  played_game.associate = function(models) {
    // associations can be defined here
  };
  return played_game;
};
