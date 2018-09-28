'use strict';
const {encode} = require('../helpers/hash.helper')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isEmailUnique(value, cb) {
          User.findOne({
              where: {
                email: value,
                id:{not:this.id}//untuk mecegah update error
              }
            })
            .then(result => {
              if (result) {
                cb(`email already exist`)
              } else
                cb();
            }).catch((err) => {
              cb(err);
            });
        }
      }
    },
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

