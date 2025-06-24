const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  serviceProviderId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'ServiceProviders',
      key: 'id'
    }
  },
  serviceType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM(
      'pending',
      'accepted',
      'rejected',
      'in_progress',
      'completed',
      'cancelled'
    ),
    defaultValue: 'pending'
  },
  pickupLocation: {
    type: DataTypes.GEOMETRY('POINT'),
    allowNull: true
  },
  dropLocation: {
    type: DataTypes.GEOMETRY('POINT'),
    allowNull: true
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  paymentStatus: {
    type: DataTypes.ENUM('pending', 'completed', 'failed'),
    defaultValue: 'pending'
  },
  details: {
    type: DataTypes.JSONB,
    allowNull: true
  }
});

module.exports = Order;