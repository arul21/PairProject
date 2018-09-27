'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    GridId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    amount: DataTypes.FLOAT
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};