'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  Schedule.associate = function(models) {
    Schedule.hasMany(models.ScheduleOrder)
  };
  return Schedule;
};