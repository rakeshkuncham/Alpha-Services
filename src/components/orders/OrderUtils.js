// Utility functions for order management
export const generateOrderId = (prefix) => {
  return `${prefix}${Date.now()}`;
};

export const createOrderObject = (type, details) => {
  return {
    id: generateOrderId(type),
    type,
    status: 'Pending',
    timestamp: new Date().toISOString(),
    ...details
  };
};