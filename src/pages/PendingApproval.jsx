import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import LogoBackground from '../components/LogoBackground';
import Logo from '../components/Logo';

const PendingApproval = () => {
  const { user } = useAuth();

  return (
    <LogoBackground>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo className="mx-auto" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Account Pending Approval
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Your service provider account is currently under review. We'll notify you once your account has been approved.
          </p>
          <p className="mt-2 text-center text-gray-600">
            This usually takes 1-2 business days.
          </p>
        </div>
      </div>
    </LogoBackground>
  );
};

export default PendingApproval;