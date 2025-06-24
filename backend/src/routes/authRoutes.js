const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

router.post('/login', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    
    if (!user || !(await user.validatePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;