import React from 'react';
import Logo from '../Logo';
import { useLocation } from 'react-router-dom';

const AuthLayout = ({ children, title }) => {
  const location = useLocation();
  
  const getBackgroundImage = () => {
    switch (location.pathname) {
      case '/register':
        return "url('/backgrounds/mountains.jpg')";
      case '/login':
        return "url('/backgrounds/bridge.jpg')";
      default:
        return "url('/backgrounds/default.jpg')";
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: getBackgroundImage(),
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo className="mx-auto" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            {title}
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;