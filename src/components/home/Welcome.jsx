import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Welcome to Alpha Service Solutions</h2>
      <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-8">
        We pride ourselves on using the modern 'Agile-Scrum' methodology and industry best practices 
        to craft modern solutions to our client's problem that are as elegant as they are enjoyable 
        to use.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/register"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Register as User
        </Link>
        <Link
          to="/serviceman/register"
          className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
        >
          Join as Service Provider
        </Link>
      </div>
    </div>
  </section>
);

export default Welcome;