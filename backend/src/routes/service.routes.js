const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middleware/auth.middleware');

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = [
      {
        id: 'food-delivery',
        title: 'Food Delivery',
        description: 'Get food delivered to your doorstep',
        price: 'Starts from ₹30'
      },
      {
        id: 'grocery-delivery',
        title: 'Grocery Delivery',
        description: 'Fresh groceries delivered daily',
        price: 'Starts from ₹50'
      }
      // Add more services as needed
    ];
    
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get service by ID
router.get('/:id', async (req, res) => {
  try {
    const service = {
      id: req.params.id,
      title: 'Food Delivery',
      description: 'Get food delivered to your doorstep',
      price: 'Starts from ₹30'
    };
    
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;