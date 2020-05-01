'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    fechaEntrega: DataTypes.STRING,
    fechaRecogida: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.User);
    Order.belongsTo(models.Movie);

    // associations can be defined here
  };
  return Order;
};