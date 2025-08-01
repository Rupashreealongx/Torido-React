// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // or use context if available

  if (!isAuthenticated) {
    return <Navigate to="/Torido-React/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
