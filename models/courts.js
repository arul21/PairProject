'use strict';
module.exports = (sequelize, DataTypes) => {
  const Courts = sequelize.define('Courts', {
    name: DataTypes.STRING
  }, {});
  Courts.associate = function(models) {
    // associations can be defined here
  };
  return Courts;
};