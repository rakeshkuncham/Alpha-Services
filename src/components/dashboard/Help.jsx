import React from 'react';

const Help = () => {
  const faqs = [
    {
      question: 'How do I book a service?',
      answer: 'You can book a service by selecting the desired service from the Services section and clicking on the Book Now button. Follow the prompts to complete your booking.'
    },
    {
      question: 'How do I track my service request?',
      answer: 'You can track your service request in the Track Orders section. It shows real-time status updates, provider details, and estimated arrival times for all your active bookings.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit/debit cards, UPI, and net banking. You can manage your payment methods in the Payments section.'
    },
    {
      question: 'How do I contact my service provider?',
      answer: 'Once your service is assigned to a provider, you can contact them directly through the Track Orders section using the Contact Provider button.'
    },
    {
      question: 'Can I cancel my service request?',
      answer: 'Yes, you can cancel your service request through the Track Orders section. Please note that cancellation charges may apply depending on the service status.'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Help Center</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t">
          <h3 className="text-lg font-semibold mb-4">Still Need Help?</h3>
          <p className="text-gray-600 mb-4">
            If you couldn't find the answer you're looking for, please contact our support team.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;