import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const navItems = [
  { id: 'customers', label: 'Customers', path: '/serviceman-dashboard/customers' },
  { id: 'maps', label: 'Maps', path: '/serviceman-dashboard/maps' },
  { id: 'completed', label: 'Services Done', path: '/serviceman-dashboard/completed' },
  { id: 'rejected', label: 'Services Rejected', path: '/serviceman-dashboard/rejected' },
  { id: 'earnings', label: 'Earned', path: '/serviceman-dashboard/earnings' },
  { id: 'support', label: 'Customer Support', path: '/serviceman-dashboard/support' },
  { id: 'help', label: 'Help', path: '/serviceman-dashboard/help' }
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md min-h-screen">
      <div className="p-4">
        <Logo className="mb-4" />
        <h2 className="text-xl font-semibold">Service Provider Dashboard</h2>
      </div>
      <nav className="mt-4">
        {navItems.map(item => (
          <Link
            key={item.id}
            to={item.path}
            className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-blue-600"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;