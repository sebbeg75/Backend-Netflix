'use strict';
module.exports = (sequelize, DataTypes) => {
  const token = sequelize.define('Token', {
    token: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  token.associate = function(models) {
    // associations can be defined here
  };
  return token;
};