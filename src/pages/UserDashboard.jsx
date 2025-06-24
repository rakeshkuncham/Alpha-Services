import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DashboardHome from '../components/dashboard/DashboardHome';
import ServiceBooking from '../components/dashboard/ServiceBooking';
import OrderTracking from '../components/dashboard/OrderTracking';
import PaymentHistory from '../components/dashboard/PaymentHistory';
import UserSettings from '../components/dashboard/UserSettings';
import Support from '../components/dashboard/Support';

const UserDashboard = () => {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/alpha-service-logo.svg'
  });

  return (
    <DashboardLayout user={user}>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/book" element={<ServiceBooking />} />
        <Route path="/orders" element={<OrderTracking />} />
        <Route path="/payments" element={<PaymentHistory />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </DashboardLayout>
  );
};

export default UserDashboard;