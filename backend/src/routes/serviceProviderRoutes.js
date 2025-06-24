const express = require('express');
const router = express.Router();
const { ServiceProvider } = require('../models');

router.get('/', async (req, res) => {
  try {
    const providers = await ServiceProvider.findAll({
      where: { status: 'available' }
    });
    res.json(providers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;