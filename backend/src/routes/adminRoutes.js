const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAdmin } = require('../middleware/auth');

router.use(isAdmin); // Protect all admin routes

router.get('/dashboard/stats', adminController.getDashboardStats);
router.get('/service-providers', adminController.getServiceProviders);
router.patch('/service-providers/:id/status', adminController.updateServiceProviderStatus);
router.get('/orders', adminController.getOrders);

module.exports = router;