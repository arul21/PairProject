'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.hasMany(models.Order)
  };
  return Customer;
};