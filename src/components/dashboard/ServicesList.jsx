import React from 'react';
import { services } from '../../data/services';

const ServicesList = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Available Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20">
                <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white text-xl font-semibold">{service.title}</h3>
                  <p className="text-white text-sm opacity-90">{service.shortDesc}</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;