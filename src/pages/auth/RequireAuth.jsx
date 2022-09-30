import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

function RequireAuth() {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return (
    user
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace />
  );
}
export default RequireAuth;
