const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ServiceProvider = sequelize.define('ServiceProvider', {
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
  serviceType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  totalOrders: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  currentLocation: {
    type: DataTypes.GEOMETRY('POINT'),
    allowNull: true
  },
  serviceArea: {
    type: DataTypes.GEOMETRY('POLYGON'),
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('available', 'busy', 'offline'),
    defaultValue: 'offline'
  },
  verificationStatus: {
    type: DataTypes.ENUM('pending', 'verified', 'rejected'),
    defaultValue: 'pending'
  }
});

module.exports = ServiceProvider;