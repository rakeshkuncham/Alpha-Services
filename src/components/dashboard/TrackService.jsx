import React from 'react';
import OrderCard from './track/OrderCard';
import EmptyState from './track/EmptyState';

const TrackService = () => {
  const activeOrders = [
    {
      id: 'ORD001',
      service: 'Food Delivery',
      status: 'In Progress',
      provider: 'John Doe',
      eta: '15 mins',
      location: 'En route to delivery',
      price: '₹450'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Track Services</h2>
      
      {activeOrders.length > 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeOrders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default TrackService;