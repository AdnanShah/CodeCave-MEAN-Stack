'use strict';
module.exports = (sequelize, DataTypes) => {
  var Create = sequelize.define('Create', {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Create;
};