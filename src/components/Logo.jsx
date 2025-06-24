import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/alpha-service-logo.svg" 
        alt="Alpha Service" 
        className="w-10 h-10"
      />
      <span className="text-xl font-bold text-blue-600">Alpha Service</span>
    </div>
  );
};

export default Logo;