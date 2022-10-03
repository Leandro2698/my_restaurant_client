import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

function RequireAuth() {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  console.log('user.restaurant', user.restaurants);
  if (user.restaurants && user.restaurants.length > 0) {
    return (
      <Navigate to="/*" state={{ from: location }} replace />
    );
  }
  if (user) {
    return (

      <Outlet />

    );
  }
  if (!user) {
    <Navigate to="/login" state={{ from: location }} replace />;
  }
}
export default RequireAuth;
