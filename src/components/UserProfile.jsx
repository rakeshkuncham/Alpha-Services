import React from 'react';
import Logo from './Logo';

const UserProfile = ({ 
  user, 
  onClose, 
  editing, 
  userDetails, 
  setUserDetails, // Add setUserDetails prop
  handleEdit, 
  handleSave, 
  handleCancel 
}) => {
  const handleChange = (field, value) => {
    setUserDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <Logo className="w-8 h-8" />
            <h2 className="text-xl font-semibold">Profile</h2>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
          >
            ✕
          </button>
        </div>
        
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <img
              src="/alpha-service-logo.svg"
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-blue-500"
            />
          </div>
        </div>

        {!editing ? (
          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">Name</p>
              <p className="font-semibold">{userDetails.name}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-semibold">{userDetails.email}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-semibold">{userDetails.phone}</p>
            </div>
            <button 
              onClick={handleEdit} 
              className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={userDetails.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={userDetails.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                value={userDetails.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Phone"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button 
                onClick={handleSave} 
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
              <button 
                onClick={handleCancel} 
                className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;