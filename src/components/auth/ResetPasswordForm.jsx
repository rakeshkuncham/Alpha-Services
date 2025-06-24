import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ResetPasswordForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    newPassword: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    // TODO: Implement send OTP logic
    setStep(2);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    // TODO: Implement OTP verification
    setStep(3);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // TODO: Implement password reset logic
    navigate('/login');
  };

  return (
    <div className="space-y-6">
      {step === 1 && (
        <form onSubmit={handleSubmitEmail} className="space-y-4">
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
          <div className="flex items-center justify-between space-x-4">
            <Link
              to="/login"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Back to Login
            </Link>
            <button
              type="submit"
              className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send OTP
            </button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleVerifyOTP} className="space-y-4">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
              Enter OTP
            </label>
            <input
              type="text"
              name="otp"
              id="otp"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.otp}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Verify OTP
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Re-enter Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save Password
            </button>
          </div>
        </form>
      )}

      <div className="mt-4 text-center">
        <Link
          to="/login"
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordForm;