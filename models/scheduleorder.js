'use strict';
module.exports = (sequelize, DataTypes) => {
  const ScheduleOrder = sequelize.define('ScheduleOrder', {
    ScheduleId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER
  }, {});
  ScheduleOrder.associate = function(models) {
    // associations can be defined here
  };
  return ScheduleOrder;
};