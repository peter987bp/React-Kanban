'use strict';
module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define('Card', {
    title: DataTypes.STRING,
    piority_selection: DataTypes.STRING,
    status: DataTypes.TEXT,
    created_by: DataTypes.STRING,
    assign_to: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Card;
};