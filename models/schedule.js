'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME
  }, {});

  Schedule.prototype.getSchedule=function(){
      return `${this.startTime} - ${this.endTime}`
  }
  Schedule.associate = function(models) {
    // associations can be defined here
  };
  return Schedule;
};