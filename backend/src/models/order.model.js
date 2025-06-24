const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  serviceProvider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  serviceType: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'in_progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  amount: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  location: {
    pickup: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    delivery: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        required: true
      }
    }
  },
  details: {
    type: mongoose.Schema.Types.Mixed
  }
}, {
  timestamps: true
});

orderSchema.index({ 'location.pickup': '2dsphere' });
orderSchema.index({ 'location.delivery': '2dsphere' });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;