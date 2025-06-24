import React, { useState } from 'react';
import ServiceDetails from './ServiceDetails';

const ServiceCard = ({ service }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowDetails(true)}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative h-48">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
            <div className="w-full p-4 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-white text-xl font-semibold">{service.title}</h3>
              <p className="text-white text-sm opacity-90">{service.shortDesc}</p>
            </div>
          </div>
        </div>
      </button>

      {showDetails && (
        <ServiceDetails
          service={service}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
};

export default ServiceCard;