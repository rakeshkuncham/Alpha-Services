import React, { useState } from 'react';

const Payments = () => {
  const [activeTab, setActiveTab] = useState('transactions');
  
  const transactions = [
    { 
      id: 1, 
      amount: 450, 
      date: '2024-01-15', 
      type: 'Food Delivery', 
      status: 'Completed',
      paymentMethod: 'Credit Card',
      orderId: 'ORD001'
    },
    { 
      id: 2, 
      amount: 850, 
      date: '2024-01-14', 
      type: 'Grocery Delivery', 
      status: 'Pending',
      paymentMethod: 'UPI',
      orderId: 'ORD002'
    }
  ];

  const savedCards = [
    {
      id: 1,
      type: 'Visa',
      number: '**** **** **** 1234',
      expiry: '12/25',
      name: 'John Doe'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Payments</h2>
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('transactions')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'transactions'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Transactions
            </button>
            <button
              onClick={() => setActiveTab('cards')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'cards'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Saved Cards
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'transactions' ? (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <button className="text-blue-600 hover:text-blue-800">
                          View Receipt
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="space-y-6">
              {savedCards.map(card => (
                <div key={card.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{card.type === 'Visa' ? '💳' : '💳'}</div>
                    <div>
                      <p className="font-medium">{card.number}</p>
                      <p className="text-sm text-gray-600">Expires: {card.expiry}</p>
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-800">
                    Remove
                  </button>
                </div>
              ))}
              <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                + Add New Card
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payments;