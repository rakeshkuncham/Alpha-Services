import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';
import Welcome from '../components/home/Welcome';
import CompanyHistory from '../components/home/CompanyHistory';
import Specialties from '../components/home/Specialties';
import ContactForm from '../components/home/ContactForm';
import ChatWidget from '../components/ChatWidget';
import { services } from '../data/services';

const Home = () => {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80"
              alt="Snow Mountains"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-32 pb-20 text-center">
              <img
                src="/alpha-service-logo.svg"
                alt="Alpha Service"
                className="w-32 h-32 mx-auto mb-8"
              />
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Alpha Service</span>
                <span className="block text-gray-200 mt-2">Your 24/7 Service Partner</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-200 sm:max-w-3xl">
                We provide service for everything - food, groceries, medicine, transport, and more.
                Connect with verified service providers for all your needs.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <Link
                    to="/register"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 sm:px-8"
                  >
                    Get started
                  </Link>
                  <Link
                    to="/about"
                    className="flex items-center justify-center px-4 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white hover:bg-white hover:text-gray-700 transition-colors sm:px-8"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Welcome />
        
        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        <CompanyHistory />
        <Specialties />
        <ContactForm />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Home;