const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware');
const Order = require('../models/order.model');

// Create new order
router.post('/', protect, async (req, res) => {
  try {
    const order = new Order({
      user: req.user.id,
      ...req.body
    });
    
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user orders
router.get('/my-orders', protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate('serviceProvider', 'name email')
      .sort('-createdAt');
    
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get order by ID
router.get('/:id', protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email')
      .populate('serviceProvider', 'name email');
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Check if user owns the order or is the service provider
    if (order.user._id.toString() !== req.user.id && 
        (!order.serviceProvider || order.serviceProvider._id.toString() !== req.user.id)) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update order status
router.patch('/:id/status', protect, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Only service provider can update status
    if (!order.serviceProvider || order.serviceProvider.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    order.status = status;
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;