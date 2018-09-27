'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grid = sequelize.define('Grid', {
    grid: DataTypes.INTEGER,
    CourtId: DataTypes.INTEGER
  }, {});
  Grid.associate = function(models) {
    // associations can be defined here
  };
  return Grid;
};