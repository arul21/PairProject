'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    time1: DataTypes.STRING,
    time2: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  Schedule.associate = function(models) {
    // associations can be defined here
    Schedule.hasMany(models.ScheduleOrder)
  };
  return Schedule;
};