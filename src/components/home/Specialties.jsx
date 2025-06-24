import React from 'react';

const SpecialtyCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Specialties = () => {
  const specialties = [
    {
      title: "We are Innovators",
      description: "We provide cutting-edge technologies such as AI-driven analytics, cloud-based platforms, and cybersecurity tools to empower our clients in an increasingly digital world."
    },
    {
      title: "We are Entrepreneurial",
      description: "We deliver advanced solutions, including AI-powered analytics, cloud infrastructure, and cybersecurity services, to enhance our clients' capabilities in a rapidly evolving digital landscape."
    },
    {
      title: "We are Visionaries",
      description: "We specialize in innovative solutions such as AI-based analytics, cloud services, and robust cybersecurity tools to support our clients in an increasingly digital world."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          We Specialize in Innovative Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <SpecialtyCard key={index} {...specialty} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;