import React, { useState } from 'react';

const Support = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle support message submission
    console.log('Support message:', message);
    setMessage('');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Customer Support</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
          <p className="text-gray-600">
            Need help? Our support team is here to assist you 24/7.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe your issue..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 pt-6 border-t">
          <h3 className="text-lg font-semibold mb-4">Other Ways to Reach Us</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-xl">📞</span>
              <div>
                <p className="font-medium">Phone Support</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl">✉️</span>
              <div>
                <p className="font-medium">Email Support</p>
                <p className="text-gray-600">support@alphaservice.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;