import React, { useEffect, useState } from 'react';
import OrderNotification from '../../components/serviceman/OrderNotification';

const NewOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // In a real app, this would be a WebSocket or polling connection
    const loadOrders = () => {
      const medicineOrders = JSON.parse(localStorage.getItem('medicineOrders') || '[]');
      setOrders(medicineOrders.filter(order => order.status === 'Pending'));
    };

    loadOrders();
    // Poll for new orders every 30 seconds
    const interval = setInterval(loadOrders, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleAccept = (orderId) => {
    const allOrders = JSON.parse(localStorage.getItem('medicineOrders') || '[]');
    const updatedOrders = allOrders.map(order => 
      order.id === orderId ? {...order, status: 'Accepted'} : order
    );
    localStorage.setItem('medicineOrders', JSON.stringify(updatedOrders));
    setOrders(orders.filter(order => order.id !== orderId));
  };

  const handleReject = (orderId) => {
    const allOrders = JSON.parse(localStorage.getItem('medicineOrders') || '[]');
    const updatedOrders = allOrders.map(order => 
      order.id === orderId ? {...order, status: 'Rejected'} : order
    );
    localStorage.setItem('medicineOrders', JSON.stringify(updatedOrders));
    setOrders(orders.filter(order => order.id !== orderId));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">New Orders</h2>
      
      {orders.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-sm text-center text-gray-600">
          No new orders at the moment
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <OrderNotification
              key={order.id}
              order={order}
              onAccept={handleAccept}
              onReject={handleReject}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewOrders;