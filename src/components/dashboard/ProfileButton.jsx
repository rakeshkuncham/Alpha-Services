import React from 'react';

const ProfileButton = ({ userDetails, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow hover:bg-gray-50"
    >
      <img
        src="/alpha-service-logo.svg"
        alt="Profile"
        className="w-8 h-8 rounded-full"
      />
      <span>{userDetails.email}</span>
    </button>
  );
};

export default ProfileButton;