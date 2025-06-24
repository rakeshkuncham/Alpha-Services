import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-32 pb-20 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-gray-900">Alpha Service</span>
                <span className="block text-blue-600 mt-2">Your 24/7 Service Partner</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-500 sm:max-w-3xl">
                We provide service for everything - food, groceries, medicine, transport, and more.
                Connect with verified service providers for all your needs.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <Link
                    to="/register"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 sm:px-8"
                  >
                    Get started
                  </Link>
                  <Link
                    to="/login"
                    className="flex items-center justify-center px-4 py-3 border border-blue-600 text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 sm:px-8"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;