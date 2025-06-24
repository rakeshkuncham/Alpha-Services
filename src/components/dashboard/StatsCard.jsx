import React from 'react';

const StatsCard = ({ title, value, valueColor = 'text-blue-600' }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
    </div>
  );
};

export default StatsCard;