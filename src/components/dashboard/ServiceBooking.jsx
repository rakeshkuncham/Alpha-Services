import React, { useState } from 'react';
import { services } from '../../data/services';
import MedicineOrderForm from '../orders/MedicineOrderForm';
import FoodDeliveryForm from '../orders/FoodDeliveryForm';
import GroceryDeliveryForm from '../orders/GroceryDeliveryForm';
import GoodsTransportForm from '../orders/GoodsTransportForm';
import RideBookingForm from '../orders/RideBookingForm';
import ServiceCard from './ServiceCard';

const ServiceBooking = () => {
  const [selectedService, setSelectedService] = useState(null);

  const renderServiceForm = () => {
    switch (selectedService.id) {
      case 'medicine-delivery':
        return <MedicineOrderForm />;
      case 'food-delivery':
        return <FoodDeliveryForm />;
      case 'grocery-delivery':
        return <GroceryDeliveryForm />;
      case 'goods-transport':
        return <GoodsTransportForm />;
      case 'bike-taxi':
        return <RideBookingForm serviceType="Bike Taxi" />;
      case 'cab-service':
        return <RideBookingForm serviceType="Cab Service" />;
      case 'auto-taxi':
        return <RideBookingForm serviceType="Auto Taxi" />;
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">{selectedService.title}</h2>
            <p>Booking form for this service is coming soon.</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {!selectedService ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={() => setSelectedService(service)}
            />
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedService(null)}
            className="mb-6 text-blue-600 hover:text-blue-800"
          >
            ← Back to Services
          </button>
          
          {renderServiceForm()}
        </div>
      )}
    </div>
  );
};

export default ServiceBooking;