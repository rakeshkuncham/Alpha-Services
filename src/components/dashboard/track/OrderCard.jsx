import React from 'react';
import OrderHeader from './OrderHeader';
import OrderDetails from './OrderDetails';
import OrderActions from './OrderActions';

const OrderCard = ({ order }) => (
  <div className="border-b pb-4 last:border-b-0 last:pb-0">
    <OrderHeader 
      service={order.service}
      id={order.id}
      status={order.status}
    />
    <OrderDetails
      provider={order.provider}
      eta={order.eta}
      location={order.location}
      price={order.price}
    />
    <OrderActions />
  </div>
);

export default OrderCard;