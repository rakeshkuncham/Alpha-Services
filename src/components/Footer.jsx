import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = ({ title, items }) => (
  <div className="space-y-4">
    <h3 className="font-semibold text-gray-900">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.link} className="text-gray-600 hover:text-blue-600 text-sm">
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const sections = {
    destinations: {
      title: "Destinations",
      items: [
        { text: "Countries", link: "/countries" },
        { text: "Regions", link: "/regions" },
        { text: "Cities", link: "/cities" },
        { text: "Districts", link: "/districts" },
        { text: "Airports", link: "/airports" },
        { text: "Hotels", link: "/hotels" },
        { text: "Places of interest", link: "/places" }
      ]
    },
    accommodation: {
      title: "Accommodation",
      items: [
        { text: "Vacation Homes", link: "/vacation-homes" },
        { text: "Apartments", link: "/apartments" },
        { text: "Resorts", link: "/resorts" },
        { text: "Villas", link: "/villas" },
        { text: "Hostels", link: "/hostels" },
        { text: "B&Bs", link: "/bnbs" },
        { text: "Guest Houses", link: "/guest-houses" }
      ]
    },
    support: {
      title: "Support",
      items: [
        { text: "Customer Service", link: "/support" },
        { text: "Safety Resource Center", link: "/safety" },
        { text: "COVID-19 FAQs", link: "/covid-19" },
        { text: "Manage your trips", link: "/trips" },
        { text: "Help Center", link: "/help" }
      ]
    },
    about: {
      title: "About",
      items: [
        { text: "About Alpha Service", link: "/about" },
        { text: "How We Work", link: "/how-we-work" },
        { text: "Sustainability", link: "/sustainability" },
        { text: "Press center", link: "/press" },
        { text: "Careers", link: "/careers" },
        { text: "Investor relations", link: "/investors" }
      ]
    },
    partners: {
      title: "Partners",
      items: [
        { text: "List your property", link: "/list-property" },
        { text: "Become an affiliate", link: "/affiliate" },
        { text: "Partner help", link: "/partner-help" },
        { text: "Extranet login", link: "/partner-login" }
      ]
    }
  };

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {Object.values(sections).map((section, index) => (
            <FooterSection key={index} title={section.title} items={section.items} />
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-sm text-gray-500">
            <p className="mb-4">
              Alpha Service is part of Alpha Holdings Inc., the world leader in online services and related services.
            </p>
            <p>Copyright © {new Date().getFullYear()} Alpha Service™. All rights reserved.</p>
          </div>
          
          <div className="mt-4 flex justify-center space-x-6">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-blue-600">
              Privacy & cookies
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-blue-600">
              Terms & conditions
            </Link>
            <Link to="/grievance" className="text-sm text-gray-500 hover:text-blue-600">
              Grievance officer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;