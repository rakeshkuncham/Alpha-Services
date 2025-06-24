import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, ShoppingBagIcon, TruckIcon, 
  CreditCardIcon, Cog6ToothIcon, QuestionMarkCircleIcon 
} from '@heroicons/react/24/outline';

const navItems = [
  { path: '/user-dashboard', icon: HomeIcon, label: 'Overview' },
  { path: '/user-dashboard/book', icon: ShoppingBagIcon, label: 'Book Service' },
  { path: '/user-dashboard/orders', icon: TruckIcon, label: 'Track Orders' },
  { path: '/user-dashboard/payments', icon: CreditCardIcon, label: 'Payments' },
  { path: '/user-dashboard/settings', icon: Cog6ToothIcon, label: 'Settings' },
  { path: '/user-dashboard/support', icon: QuestionMarkCircleIcon, label: 'Support' }
];

const DashboardLayout = ({ children, user }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <Link to="/user-dashboard" className="flex items-center space-x-2">
            <img src="/alpha-service-logo.svg" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-blue-600">Alpha Service</span>
          </Link>
        </div>
        
        <nav className="p-4 space-y-2">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                location.pathname === path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">
                {navItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
              </h1>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;