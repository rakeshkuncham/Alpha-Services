import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GroceryDeliveryForm = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState({
    items: '',
    deliveryAddress: '',
    preferredTime: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      id: 'GROC' + Date.now(),
      type: 'Grocery Delivery',
      status: 'Pending',
      timestamp: new Date().toISOString(),
      ...orderDetails
    };
    
    const orders = JSON.parse(localStorage.getItem('groceryOrders') || '[]');
    orders.push(order);
    localStorage.setItem('groceryOrders', JSON.stringify(orders));
    
    navigate('/user-dashboard/orders');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Grocery Delivery Order</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Grocery Items
          </label>
          <textarea
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="List your grocery items..."
            value={orderDetails.items}
            onChange={(e) => setOrderDetails({...orderDetails, items: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Delivery Address
          </label>
          <textarea
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="2"
            placeholder="Enter delivery address..."
            value={orderDetails.deliveryAddress}
            onChange={(e) => setOrderDetails({...orderDetails, deliveryAddress: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Delivery Time
          </label>
          <input
            type="datetime-local"
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={orderDetails.preferredTime}
            onChange={(e) => setOrderDetails({...orderDetails, preferredTime: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Notes
          </label>
          <textarea
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="2"
            placeholder="Any special instructions..."
            value={orderDetails.notes}
            onChange={(e) => setOrderDetails({...orderDetails, notes: e.target.value})}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default GroceryDeliveryForm;