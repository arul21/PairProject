'use strict';
const {encode} = require('../helpers/hash.helper')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role : DataTypes.STRING
  });

  User.beforeCreate((user, options) => {
      user.password = encode(user.password);
  });

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

