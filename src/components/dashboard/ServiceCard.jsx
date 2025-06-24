import React from 'react';

const ServiceCard = ({ service, onSelect }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
      onClick={onSelect}
    >
      <div className="h-48 relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-sm opacity-90">{service.shortDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;