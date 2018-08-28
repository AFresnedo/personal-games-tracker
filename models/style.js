'use strict';
module.exports = (sequelize, DataTypes) => {
  var style = sequelize.define('style', {
    adj: DataTypes.STRING
  }, {});
  style.associate = function(models) {
    models.style.belongsToMany(models.game);
  };
  return style;
};
