import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MedicineOrderForm = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState({
    medicines: '',
    prescription: null,
    deliveryAddress: '',
    urgency: 'normal',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would make an API call
    const order = {
      id: 'MED' + Date.now(),
      type: 'Medicine Delivery',
      status: 'Pending',
      timestamp: new Date().toISOString(),
      ...orderDetails
    };
    
    // Store in localStorage for demo
    const orders = JSON.parse(localStorage.getItem('medicineOrders') || '[]');
    orders.push(order);
    localStorage.setItem('medicineOrders', JSON.stringify(orders));
    
    navigate('/user-dashboard/orders');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Medicine Delivery Order</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Medicines Required
          </label>
          <textarea
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="List the medicines you need..."
            value={orderDetails.medicines}
            onChange={(e) => setOrderDetails({...orderDetails, medicines: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Prescription (if any)
          </label>
          <input
            type="file"
            accept="image/*,.pdf"
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setOrderDetails({...orderDetails, prescription: e.target.files[0]})}
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
            Urgency Level
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={orderDetails.urgency}
            onChange={(e) => setOrderDetails({...orderDetails, urgency: e.target.value})}
          >
            <option value="normal">Normal</option>
            <option value="urgent">Urgent</option>
            <option value="emergency">Emergency</option>
          </select>
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

export default MedicineOrderForm;