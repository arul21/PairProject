'use strict';
module.exports = (sequelize, DataTypes) => {
  const Court = sequelize.define('Court', {
    name: DataTypes.STRING
  }, {});
  Court.associate = function(models) {
    // associations can be defined here
  };
  return Court;
};