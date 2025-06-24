import React from 'react';

const PaymentMethodCard = ({ icon, title, description, onClick }) => (
  <button
    onClick={onClick}
    className="w-full p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-4"
  >
    <span className="text-2xl">{icon}</span>
    <div className="text-left">
      <h3 className="font-medium text-gray-900">{title}</h3>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  </button>
);

const PaymentMethods = ({ onSelectMethod }) => {
  const upiApps = [
    { id: 'googlepay', name: 'Google Pay', icon: '📱' },
    { id: 'phonepe', name: 'PhonePe', icon: '📱' },
    { id: 'paytm', name: 'Paytm', icon: '📱' },
    { id: 'bhim', name: 'BHIM UPI', icon: '📱' }
  ];

  const cardTypes = [
    { id: 'credit', name: 'Credit Card', icon: '💳' },
    { id: 'debit', name: 'Debit Card', icon: '💳' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">UPI Payment</h3>
        <div className="grid grid-cols-2 gap-4">
          {upiApps.map(app => (
            <PaymentMethodCard
              key={app.id}
              icon={app.icon}
              title={app.name}
              onClick={() => onSelectMethod({ type: 'upi', app: app.id })}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Cards</h3>
        <div className="space-y-4">
          {cardTypes.map(card => (
            <PaymentMethodCard
              key={card.id}
              icon={card.icon}
              title={card.name}
              description="Secure card payment"
              onClick={() => onSelectMethod({ type: 'card', cardType: card.id })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;