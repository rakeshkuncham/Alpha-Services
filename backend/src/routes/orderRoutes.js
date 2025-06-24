const express = require('express');
const router = express.Router();
const { Order } = require('../models');

router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { userId: req.user.id }
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;