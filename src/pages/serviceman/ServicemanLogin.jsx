import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';

const ServicemanLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    navigate('/serviceman-dashboard');
  };

  return (
    <AuthLayout title="Service Provider Login">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <Link
            to="/serviceman/reset-password"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="flex items-center justify-between space-x-4">
          <Link
            to="/"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            Back to Home
          </Link>
          <button
            type="submit"
            className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </div>

        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">Don't have an account? </span>
          <Link
            to="/serviceman/register"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            Register as Service Provider
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ServicemanLogin;