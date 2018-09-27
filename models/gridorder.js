'use strict';
module.exports = (sequelize, DataTypes) => {
  const GridOrder = sequelize.define('GridOrder', {
    GridId: DataTypes.INTEGER,
    ScheduleOrderId: DataTypes.INTEGER
  }, {});
  GridOrder.associate = function(models) {
    // associations can be defined here
    GridOrder.belongsTo(models.ScheduleOrder)
    GridOrder.belongsTo(models.Grid)
  };
  return GridOrder;
};