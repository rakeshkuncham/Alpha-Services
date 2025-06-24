import React, { useState } from 'react';
import { ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle message submission
    console.log('Message submitted:', message);
    setMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <ChatBubbleLeftIcon className="h-6 w-6" />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-80">
          <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Alpha Service</h3>
              <p className="text-sm text-blue-100">Leave us a message</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-200"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          
          <div className="p-4 bg-gray-50">
            <p className="text-sm text-gray-600">
              We are not available right now. Please leave us a message. We'll get back as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              rows="4"
            />
            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="p-4 border-t text-center text-xs text-gray-500">
            Powered by Alpha Service
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;