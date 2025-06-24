import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  return (
    <AuthLayout title="Sign in to your account">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;