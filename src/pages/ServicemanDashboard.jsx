import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ServicemanSidebar from '../components/dashboard/ServicemanSidebar';
import ProfileButton from '../components/dashboard/ProfileButton';
import UserProfile from '../components/UserProfile';
import StatsCard from '../components/dashboard/StatsCard';
import Customers from './serviceman/Customers';
import Maps from './serviceman/Maps';
import NewOrders from './serviceman/NewOrders';
import Help from '../components/dashboard/Help';
import Support from '../components/dashboard/Support';

const ServicemanHome = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard title="Total Orders" value="15" valueColor="text-blue-600" />
        <StatsCard title="Completed" value="12" valueColor="text-green-600" />
        <StatsCard title="Pending" value="3" valueColor="text-yellow-600" />
        <StatsCard title="Earnings" value="₹4,500" valueColor="text-blue-600" />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Medicine Delivery</h3>
              <p className="text-sm text-gray-600">Order #MED001 - Completed</p>
            </div>
            <span className="text-green-600 font-medium">₹150</span>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Food Delivery</h3>
              <p className="text-sm text-gray-600">Order #FOOD002 - In Progress</p>
            </div>
            <span className="text-blue-600 font-medium">₹250</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicemanDashboard = () => {
  const [user] = useState({
    id: '123',
    name: 'John Doe',
    email: 'john@example.com'
  });
  
  const [showProfile, setShowProfile] = useState(false);
  const [editing, setEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890'
  });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <ServicemanSidebar />
      
      <div className="flex-1">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
              Service Provider Dashboard
            </h1>
            <ProfileButton 
              userDetails={userDetails} 
              onClick={() => setShowProfile(true)} 
            />
          </div>

          <Routes>
            <Route path="/" element={<ServicemanHome />} />
            <Route path="/new-orders" element={<NewOrders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/help" element={<Help />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </div>

      {showProfile && (
        <UserProfile
          user={user}
          onClose={() => setShowProfile(false)}
          editing={editing}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          handleEdit={handleEdit}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default ServicemanDashboard;