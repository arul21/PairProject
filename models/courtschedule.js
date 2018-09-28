'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourtSchedule = sequelize.define('CourtSchedule', {
    CourtId: DataTypes.INTEGER,
    ScheduleId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  CourtSchedule.associate = function(models) {
    // associations can be defined here
    CourtSchedule.belongsTo(models.Schedule);
    CourtSchedule.belongsTo(models.Court)
  };
  return CourtSchedule;
};