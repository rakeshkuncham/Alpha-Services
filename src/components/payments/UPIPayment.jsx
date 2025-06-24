import React, { useState } from 'react';

const UPIPayment = ({ selectedApp, onSubmit, onCancel }) => {
  const [upiId, setUpiId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ upiId, app: selectedApp });
  };

  const getAppName = (appId) => {
    const apps = {
      googlepay: 'Google Pay',
      phonepe: 'PhonePe',
      paytm: 'Paytm',
      bhim: 'BHIM UPI'
    };
    return apps[appId] || 'UPI';
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-2xl">📱</span>
        <h3 className="text-lg font-medium text-gray-900">
          Pay with {getAppName(selectedApp)}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            UPI ID
          </label>
          <input
            type="text"
            placeholder="username@upi"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            required
          />
          <p className="mt-1 text-sm text-gray-500">
            Enter your UPI ID (e.g., username@bank)
          </p>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default UPIPayment;