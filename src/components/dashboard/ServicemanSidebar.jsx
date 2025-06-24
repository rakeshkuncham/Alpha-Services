import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';

const ServicemanSidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50';

  const navItems = [
    { path: '/serviceman-dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/serviceman-dashboard/customers', label: 'Customers', icon: '👥' },
    { path: '/serviceman-dashboard/maps', label: 'Maps', icon: '🗺️' },
    { path: '/serviceman-dashboard/completed', label: 'Services Done', icon: '✅' },
    { path: '/serviceman-dashboard/rejected', label: 'Services Rejected', icon: '❌' },
    { path: '/serviceman-dashboard/earnings', label: 'Earned', icon: '💰' },
    { path: '/serviceman-dashboard/support', label: 'Customer Support', icon: '💬' },
    { path: '/serviceman-dashboard/help', label: 'Help', icon: '❓' }
  ];

  return (
    <div className="w-64 bg-white shadow-md min-h-screen flex flex-col">
      <div className="p-4 border-b">
        <Logo className="mb-4" />
        <h2 className="text-lg font-semibold text-gray-800">Service Provider</h2>
      </div>
      <nav className="flex-1 py-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-4 py-3 hover:bg-gray-50 hover:text-blue-600 transition-colors ${isActive(item.path)}`}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default ServicemanSidebar;