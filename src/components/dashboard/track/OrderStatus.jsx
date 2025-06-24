import React from 'react';

const OrderStatus = ({ status }) => (
  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
    {status}
  </span>
);

export default OrderStatus;