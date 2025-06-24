import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <button
                onClick={logout}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;