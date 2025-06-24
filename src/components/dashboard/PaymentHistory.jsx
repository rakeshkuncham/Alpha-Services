import React, { useState } from 'react';
import PaymentMethods from '../payments/PaymentMethods';
import CardPaymentForm from '../payments/CardPaymentForm';
import UPIPayment from '../payments/UPIPayment';

const PaymentHistory = () => {
  const [activeTab, setActiveTab] = useState('payment');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  
  const transactions = [
    { 
      id: 1, 
      amount: 450, 
      date: '2024-01-15', 
      type: 'Food Delivery', 
      status: 'Completed',
      paymentMethod: 'Google Pay',
      orderId: 'ORD001'
    },
    { 
      id: 2, 
      amount: 850, 
      date: '2024-01-14', 
      type: 'Grocery Delivery', 
      status: 'Pending',
      paymentMethod: 'Credit Card',
      orderId: 'ORD002'
    }
  ];

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handlePaymentSubmit = (details) => {
    console.log('Payment submitted:', { method: selectedPaymentMethod, details });
    setSelectedPaymentMethod(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('payment')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'payment'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Make Payment
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'history'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Payment History
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'payment' ? (
            <div>
              {selectedPaymentMethod?.type === 'card' ? (
                <CardPaymentForm 
                  onSubmit={handlePaymentSubmit}
                  onCancel={() => setSelectedPaymentMethod(null)}
                />
              ) : selectedPaymentMethod?.type === 'upi' ? (
                <UPIPayment
                  selectedApp={selectedPaymentMethod.app}
                  onSubmit={handlePaymentSubmit}
                  onCancel={() => setSelectedPaymentMethod(null)}
                />
              ) : (
                <PaymentMethods onSelectMethod={handlePaymentMethodSelect} />
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Method
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {transaction.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {transaction.orderId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {transaction.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ₹{transaction.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {transaction.paymentMethod}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          transaction.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;