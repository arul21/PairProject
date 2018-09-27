'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grid = sequelize.define('Grid', {
    grid: DataTypes.INTEGER,
    CourtId: DataTypes.INTEGER
  }, {});
  Grid.associate = function(models) {
    Grid.belongsTo(models.Courts)
    Grid.hasMany(models.Order)
  };
  return Grid;
};