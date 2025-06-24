import React from 'react';

const CompanyHistory = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Company History</h3>
            <p className="text-gray-600">
              Alpha Service Solutions was founded in 2020 and has come a long way from its inception, 
              standing strong in this competitive market by maintaining our commitment to building the 
              best IT solutions.
            </p>
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading provider of innovative digital solutions that transform businesses 
              and enhance lives.
            </p>
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-gray-600">
              To deliver exceptional service solutions that empower our clients to succeed in an 
              ever-evolving digital landscape.
            </p>
          </div>
        </div>
        <div className="relative h-96">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Modern office"
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default CompanyHistory;