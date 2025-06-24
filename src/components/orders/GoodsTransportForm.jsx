import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LocationPicker from '../map/LocationPicker';

const GoodsTransportForm = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState({
    pickupLocation: null,
    dropLocation: null,
    goodsType: '',
    weight: '',
    dimensions: '',
    deliveryDate: '',
    specialInstructions: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      id: 'TRANS' + Date.now(),
      type: 'Goods Transport',
      status: 'Pending',
      timestamp: new Date().toISOString(),
      ...orderDetails
    };
    
    const orders = JSON.parse(localStorage.getItem('transportOrders') || '[]');
    orders.push(order);
    localStorage.setItem('transportOrders', JSON.stringify(orders));
    
    navigate('/user-dashboard/orders');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Goods Transport Booking</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pickup Location
          </label>
          <LocationPicker
            position={orderDetails.pickupLocation}
            onLocationSelect={(location) => 
              setOrderDetails({...orderDetails, pickupLocation: [location.lat, location.lng]})
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Drop Location
          </label>
          <LocationPicker
            position={orderDetails.dropLocation}
            onLocationSelect={(location) => 
              setOrderDetails({...orderDetails, dropLocation: [location.lat, location.lng]})
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type of Goods
          </label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Furniture, Electronics, etc."
            value={orderDetails.goodsType}
            onChange={(e) => setOrderDetails({...orderDetails, goodsType: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Weight (kg)
            </label>
            <input
              type="number"
              required
              min="0"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={orderDetails.weight}
              onChange={(e) => setOrderDetails({...orderDetails, weight: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dimensions (LxWxH cm)
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 100x50x75"
              value={orderDetails.dimensions}
              onChange={(e) => setOrderDetails({...orderDetails, dimensions: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Delivery Date
          </label>
          <input
            type="date"
            required
            min={new Date().toISOString().split('T')[0]}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={orderDetails.deliveryDate}
            onChange={(e) => setOrderDetails({...orderDetails, deliveryDate: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Special Instructions
          </label>
          <textarea
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="2"
            placeholder="Any special handling instructions..."
            value={orderDetails.specialInstructions}
            onChange={(e) => setOrderDetails({...orderDetails, specialInstructions: e.target.value})}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Book Transport
        </button>
      </form>
    </div>
  );
};

export default GoodsTransportForm;