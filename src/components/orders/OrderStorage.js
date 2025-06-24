// Utility functions for order storage management
export const saveOrder = (type, order) => {
  const storageKey = `${type}Orders`;
  const orders = JSON.parse(localStorage.getItem(storageKey) || '[]');
  orders.push(order);
  localStorage.setItem(storageKey, JSON.stringify(orders));
};

export const getOrders = (type) => {
  const storageKey = `${type}Orders`;
  return JSON.parse(localStorage.getItem(storageKey) || '[]');
};

export const updateOrderStatus = (type, orderId, status) => {
  const storageKey = `${type}Orders`;
  const orders = JSON.parse(localStorage.getItem(storageKey) || '[]');
  const updatedOrders = orders.map(order => 
    order.id === orderId ? {...order, status} : order
  );
  localStorage.setItem(storageKey, JSON.stringify(updatedOrders));
};