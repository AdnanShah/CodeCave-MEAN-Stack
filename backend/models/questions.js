"use strict";
module.exports = (sequelize, DataTypes) => {
  var Questions = sequelize.define("Questions", {
    question: DataTypes.STRING,
    answers: DataTypes.STRING
  });

  Questions.associate = function(models) {
    models.Questions.belongsTo(models.Create, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Questions;
};
