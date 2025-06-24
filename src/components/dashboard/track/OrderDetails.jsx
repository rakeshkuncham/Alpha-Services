import React from 'react';

const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-600">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);

const OrderDetails = ({ provider, eta, location, price }) => (
  <div className="grid grid-cols-2 gap-4 mb-4">
    <DetailItem label="Service Provider" value={provider} />
    <DetailItem label="ETA" value={eta} />
    <DetailItem label="Current Location" value={location} />
    <DetailItem label="Price" value={price} />
  </div>
);

export default OrderDetails;