"use strict";
module.exports = (sequelize, DataTypes) => {
  var Create = sequelize.define("Create", {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  });

  Create.associate = function(models) {
    models.Create.hasMany(models.Questions, {
      foreignKey: "CreateId",
      constraints: false
    });
  };
  return Create;
};
