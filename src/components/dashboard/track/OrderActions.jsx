import React from 'react';

const OrderActions = () => (
  <div className="flex justify-end space-x-4">
    <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800">
      Contact Provider
    </button>
    <button className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800">
      Cancel Order
    </button>
  </div>
);

export default OrderActions;