'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    UserId: DataTypes.INTEGER,
    CourtScheduleId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};