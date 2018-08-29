'use strict';
module.exports = (sequelize, DataTypes) => {
  var genre = sequelize.define('genre', {
    noun: DataTypes.STRING
  }, {});
  genre.associate = function(models) {
    models.genre.belongsToMany(models.game,
      { through: 'genres_to_games' });
  };
  return genre;
};
