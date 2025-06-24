import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FoodDeliveryForm = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState({
    restaurant: '',
    items: '',
    deliveryAddress: '',
    specialInstructions: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      id: 'FOOD' + Date.now(),
      type: 'Food Delivery',
      status: 'Pending',
      timestamp: new Date().toISOString(),
      ...orderDetails
    };
    
    const orders = JSON.parse(localStorage.getItem('foodOrders') || '[]');
    orders.push(order);
    localStorage.setItem('foodOrders', JSON.stringify(orders));
    
    navigate('/user-dashboard/orders');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Food Delivery Order</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Restaurant Name
          </label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter restaurant name"
            value={orderDetails.restaurant}
            onChange={(e) => setOrderDetails({...orderDetails, restaurant: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Food Items
          </label>
          <textarea
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="List your food items..."
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
            Special Instructions
          </label>
          <textarea
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="2"
            placeholder="Any special instructions..."
            value={orderDetails.specialInstructions}
            onChange={(e) => setOrderDetails({...orderDetails, specialInstructions: e.target.value})}
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

export default FoodDeliveryForm;