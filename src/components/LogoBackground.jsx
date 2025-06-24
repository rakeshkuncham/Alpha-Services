import React from 'react';

const LogoBackground = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img
          src="/alpha-service-logo.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      {children}
    </div>
  );
};

export default LogoBackground;