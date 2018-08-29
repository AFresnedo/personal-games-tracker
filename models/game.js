'use strict';
module.exports = (sequelize, DataTypes) => {
  var game = sequelize.define('game', {
    title: DataTypes.STRING,
    release: DataTypes.STRING,
    dev: DataTypes.STRING,
    pub: DataTypes.STRING,
    build: DataTypes.STRING
  }, {});
  game.associate = function(models) {
    models.game.belongsToMany(models.style,
      { through: 'styles_to_games' });
    models.game.belongsToMany(models.genre,
      { through: 'genres_to_games' });
  };
  return game;
};
