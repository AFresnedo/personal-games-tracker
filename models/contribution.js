'use strict';
module.exports = (sequelize, DataTypes) => {
  var contribution = sequelize.define('contribution', {
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    field: DataTypes.STRING
  }, {});
  contribution.associate = function(models) {
    models.contribution.belongsTo(models.user);
    models.contribution.belongsTo(models.game);
  };
  return contribution;
};
