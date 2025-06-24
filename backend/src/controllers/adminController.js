const { User, ServiceProvider, Order } = require('../models');

exports.getDashboardStats = async (req, res) => {
  try {
    const stats = {
      totalUsers: await User.count({ where: { role: 'user' } }),
      totalServiceProviders: await ServiceProvider.count(),
      totalOrders: await Order.count(),
      pendingApprovals: await ServiceProvider.count({
        where: { verificationStatus: 'pending' }
      })
    };
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getServiceProviders = async (req, res) => {
  try {
    const providers = await ServiceProvider.findAll({
      include: [{ model: User, attributes: ['name', 'email'] }]
    });
    res.json(providers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateServiceProviderStatus = async (req, res) => {
  const { id } = req.params;
  const { verificationStatus } = req.body;

  try {
    const provider = await ServiceProvider.findByPk(id);
    if (!provider) {
      return res.status(404).json({ error: 'Service provider not found' });
    }

    await provider.update({ verificationStatus });
    res.json(provider);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        { model: User, attributes: ['name', 'email'] },
        { model: ServiceProvider, include: [{ model: User, attributes: ['name', 'email'] }] }
      ]
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};