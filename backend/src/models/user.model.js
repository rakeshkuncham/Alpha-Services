const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    trim: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('user', 'serviceman', 'admin'),
    defaultValue: 'user'
  },
  phone: {
    type: DataTypes.STRING,
    trim: true
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive', 'pending'),
    defaultValue: 'active'
  }
}, {
  timestamps: true
});

// Password hashing middleware
User.beforeCreate(async (user) => {
  if (user.password) {
    const bcrypt = require('bcryptjs');
    user.password = await bcrypt.hash(user.password, 10);
  }
});

// Instance method to compare password
User.prototype.comparePassword = async function(candidatePassword) {
  const bcrypt = require('bcryptjs');
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = User;