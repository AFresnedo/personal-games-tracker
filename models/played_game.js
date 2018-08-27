'use strict';
module.exports = (sequelize, DataTypes) => {
  var played_game = sequelize.define('played_game', {
    gameId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {});
  played_game.associate = function(models) {
    models.played_game.belongsTo(models.user);
  };
  return played_game;
};
