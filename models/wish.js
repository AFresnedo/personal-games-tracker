'use strict';
module.exports = (sequelize, DataTypes) => {
  var wish = sequelize.define('wish', {
    gameId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    hype: DataTypes.INTEGER
  }, {});
  wish.associate = function(models) {
    // associations can be defined here
  };
  return wish;
};