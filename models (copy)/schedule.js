'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    time1: DataTypes.STRING,
    time2: DataTypes.STRING,
    price: DataTypes.FLOAT,
    CourtId:DataTypes.INTEGER
  }, {});
  Schedule.associate = function(models) {
    // associations can be defined here
    Schedule.hasMany(models.ScheduleOrder),
    Schedule.belongsTo(models.Courts)
  };
  return Schedule;
};