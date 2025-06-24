import React from 'react';

const OrderTracking = () => {
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
      <div className="bg-white rounded-lg shadow-sm p-6">
        {activeOrders.length > 0 ? (
          activeOrders.map(order => (
            <div key={order.id} className="border-b pb-6 last:border-b-0 last:pb-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{order.service}</h3>
                  <p className="text-sm text-gray-600">Order ID: {order.id}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {order.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Service Provider</p>
                  <p className="font-medium">{order.provider}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">ETA</p>
                  <p className="font-medium">{order.eta}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Current Location</p>
                  <p className="font-medium">{order.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="font-medium">{order.price}</p>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                  Contact Provider
                </button>
                <button className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800">
                  Cancel Order
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No active orders to track</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;