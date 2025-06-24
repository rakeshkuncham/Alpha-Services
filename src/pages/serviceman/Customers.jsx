import React from 'react';

const Customers = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Customers</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="border-b pb-4 mb-4">
          <h3 className="text-xl font-semibold mb-2">Active Customers</h3>
          <p className="text-gray-600">No active customers at the moment.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Customer History</h3>
          <p className="text-gray-600">No customer history available.</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;