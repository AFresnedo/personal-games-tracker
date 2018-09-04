'use strict';
module.exports = (sequelize, DataTypes) => {
  var wish = sequelize.define('wish', {
    gameId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    hype: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  }, {});
  wish.associate = function(models) {
    models.wish.belongsTo(models.user);
    models.wish.belongsTo(models.game);
  };

  return wish;
};
