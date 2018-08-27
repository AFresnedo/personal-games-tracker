'use strict';
module.exports = (sequelize, DataTypes) => {
  var game = sequelize.define('game', {
    title: DataTypes.STRING,
    release: DataTypes.STRING,
    genre: DataTypes.STRING,
    style: DataTypes.STRING,
    dev: DataTypes.STRING,
    pub: DataTypes.STRING,
    build: DataTypes.STRING
  }, {});
  game.associate = function(models) {
    // associations can be defined here
  };
  return game;
};