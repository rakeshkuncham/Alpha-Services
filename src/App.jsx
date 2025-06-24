import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import UserDashboard from './pages/UserDashboard';
import ServicemanDashboard from './pages/ServicemanDashboard';
import ServicemanLogin from './pages/serviceman/ServicemanLogin';
import ServicemanRegister from './pages/serviceman/ServicemanRegister';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/user-dashboard/*" element={<UserDashboard />} />
          <Route path="/serviceman-dashboard/*" element={<ServicemanDashboard />} />
          <Route path="/serviceman/login" element={<ServicemanLogin />} />
          <Route path="/serviceman/register" element={<ServicemanRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;