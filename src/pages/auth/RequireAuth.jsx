// import { useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import restaurantUser from '../../apollo/queries/user/restaurants/Restaurant';
import { AuthContext } from '../../context/authContext';
// import { RestaurantProvider } from '../../context/RestaurantContext';

function RequireAuth() {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  if (user) {
    return <Outlet />;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}
export default RequireAuth;
