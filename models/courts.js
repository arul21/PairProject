'use strict';
module.exports = (sequelize, DataTypes) => {
  const Courts = sequelize.define('Courts', {
    name: DataTypes.STRING
  }, {});
  Courts.associate = function(models) {
    Courts.hasMany(models.Grid)
  };
  return Courts;
};