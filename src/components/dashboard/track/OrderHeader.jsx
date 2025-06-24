import React from 'react';
import OrderStatus from './OrderStatus';

const OrderHeader = ({ service, id, status }) => (
  <div className="flex justify-between items-start mb-4">
    <div>
      <h3 className="text-lg font-semibold">{service}</h3>
      <p className="text-sm text-gray-600">Order ID: {id}</p>
    </div>
    <OrderStatus status={status} />
  </div>
);

export default OrderHeader;