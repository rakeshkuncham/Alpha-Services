import React from 'react';
import ServiceMap from '../../components/dashboard/ServiceMap';

const Maps = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Service Area Map</h2>
      <ServiceMap />
    </div>
  );
};

export default Maps;