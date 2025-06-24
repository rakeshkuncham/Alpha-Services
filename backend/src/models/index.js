const User = require('./User');
const ServiceProvider = require('./ServiceProvider');
const Order = require('./Order');

// Define relationships
User.hasOne(ServiceProvider);
ServiceProvider.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

ServiceProvider.hasMany(Order);
Order.belongsTo(ServiceProvider);

module.exports = {
  User,
  ServiceProvider,
  Order
};