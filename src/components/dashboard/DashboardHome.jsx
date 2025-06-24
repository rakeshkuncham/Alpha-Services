import React from 'react';
import { Link } from 'react-router-dom';

const StatsCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-semibold mt-2">{value}</p>
      </div>
      <span className="text-3xl">{icon}</span>
    </div>
  </div>
);

const QuickAction = ({ icon, title, link }) => (
  <Link
    to={link}
    className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
  >
    <span className="text-2xl mb-2">{icon}</span>
    <span className="text-sm font-medium text-gray-700">{title}</span>
  </Link>
);

const DashboardHome = () => {
  const stats = [
    { title: 'Active Orders', value: '2', icon: '📦' },
    { title: 'Total Orders', value: '15', icon: '📊' },
    { title: 'Total Spent', value: '₹2,450', icon: '💰' },
    { title: 'Saved Address', value: '3', icon: '📍' }
  ];

  const quickActions = [
    { icon: '🛵', title: 'Book Delivery', link: '/user-dashboard/book' },
    { icon: '🚗', title: 'Book Ride', link: '/user-dashboard/book' },
    { icon: '🛒', title: 'Order Groceries', link: '/user-dashboard/book' },
    { icon: '💊', title: 'Order Medicine', link: '/user-dashboard/book' }
  ];

  const recentOrders = [
    {
      id: 'ORD001',
      service: 'Food Delivery',
      status: 'In Progress',
      date: '2024-01-20',
      amount: '₹450',
      provider: 'John D.'
    },
    {
      id: 'ORD002',
      service: 'Grocery Delivery',
      status: 'Completed',
      date: '2024-01-19',
      amount: '₹850',
      provider: 'Mike S.'
    }
  ];

  const upcomingServices = [
    {
      id: 'SVC001',
      type: 'Cab Ride',
      time: 'Today, 3:00 PM',
      status: 'Scheduled'
    },
    {
      id: 'SVC002',
      type: 'Medicine Delivery',
      time: 'Tomorrow, 10:00 AM',
      status: 'Scheduled'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <QuickAction key={index} {...action} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{order.service}</h3>
                  <p className="text-sm text-gray-600">Order ID: {order.id}</p>
                  <p className="text-sm text-gray-600">Provider: {order.provider}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{order.amount}</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    order.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Link 
            to="/user-dashboard/orders" 
            className="block mt-4 text-center text-sm text-blue-600 hover:text-blue-800"
          >
            View All Orders
          </Link>
        </div>

        {/* Upcoming Services */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Services</h2>
          <div className="space-y-4">
            {upcomingServices.map((service) => (
              <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{service.type}</h3>
                  <p className="text-sm text-gray-600">{service.time}</p>
                </div>
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                  {service.status}
                </span>
              </div>
            ))}
          </div>
          <Link 
            to="/user-dashboard/book" 
            className="block mt-4 text-center text-sm text-blue-600 hover:text-blue-800"
          >
            Book New Service
          </Link>
        </div>
      </div>

      {/* Offers and Promotions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white">
            <h3 className="font-medium mb-2">50% OFF on First Ride</h3>
            <p className="text-sm opacity-90">Use code: FIRST50</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg text-white">
            <h3 className="font-medium mb-2">Free Delivery on Orders Above ₹500</h3>
            <p className="text-sm opacity-90">Auto-applied at checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;