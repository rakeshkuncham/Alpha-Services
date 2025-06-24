import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LocationPicker from '../map/LocationPicker';

const RideBookingForm = ({ serviceType }) => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState({
    pickupLocation: null,
    dropLocation: null,
    passengers: '1',
    scheduledTime: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      id: serviceType.toUpperCase() + Date.now(),
      type: serviceType,
      status: 'Pending',
      timestamp: new Date().toISOString(),
      ...orderDetails
    };
    
    const orders = JSON.parse(localStorage.getItem('rideOrders') || '[]');
    orders.push(order);
    localStorage.setItem('rideOrders', JSON.stringify(orders));
    
    navigate('/user-dashboard/orders');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">{serviceType} Booking</h2>
      
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

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Passengers
            </label>
            <input
              type="number"
              required
              min="1"
              max={serviceType === 'Bike Taxi' ? '1' : '4'}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={orderDetails.passengers}
              onChange={(e) => setOrderDetails({...orderDetails, passengers: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Scheduled Time
            </label>
            <input
              type="datetime-local"
              required
              min={new Date().toISOString().slice(0, 16)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={orderDetails.scheduledTime}
              onChange={(e) => setOrderDetails({...orderDetails, scheduledTime: e.target.value})}
            />
          </div>
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
          Book {serviceType}
        </button>
      </form>
    </div>
  );
};

export default RideBookingForm;