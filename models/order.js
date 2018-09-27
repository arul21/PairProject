'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    GridId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    amount: DataTypes.FLOAT
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Customer)
    Order.belongsTo(models.Grid)
    Order.hasMany(models.ScheduleOrder)
  };
  return Order;
};