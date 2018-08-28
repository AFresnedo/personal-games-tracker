'use strict';
module.exports = (sequelize, DataTypes) => {
  var genre = sequelize.define('genre', {
    noun: DataTypes.STRING
  }, {});
  genre.associate = function(models) {
    // associations can be defined here
  };
  return genre;
};