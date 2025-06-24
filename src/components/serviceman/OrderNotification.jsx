import React from 'react';

const OrderNotification = ({ order, onAccept, onReject }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">New Medicine Delivery Order</h3>
          <p className="text-sm text-gray-600">Order ID: {order.id}</p>
          <div className="mt-2 space-y-1">
            <p className="text-sm"><strong>Medicines:</strong> {order.medicines}</p>
            <p className="text-sm"><strong>Delivery Address:</strong> {order.deliveryAddress}</p>
            <p className="text-sm"><strong>Urgency:</strong> 
              <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                order.urgency === 'emergency' ? 'bg-red-100 text-red-800' :
                order.urgency === 'urgent' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {order.urgency.charAt(0).toUpperCase() + order.urgency.slice(1)}
              </span>
            </p>
            {order.notes && <p className="text-sm"><strong>Notes:</strong> {order.notes}</p>}
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => onAccept(order.id)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Accept
          </button>
          <button
            onClick={() => onReject(order.id)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderNotification;