// import { useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { AuthContext } from '../../context/authContext';
import restaurantUser from '../../apollo/queries/user/restaurants/Restaurant';
import { RestaurantProvider } from '../../context/RestaurantContext';
// import { RestaurantProvider } from '../../context/RestaurantContext';
// import { RestaurantProvider } from '../../context/RestaurantContext';

function RequireRestaurant() {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { loading, error, data } = useQuery(restaurantUser.GET_RESTAURANTS, {
    variables: { userId: user.id },

  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const { restaurants } = data.getUser;

  return (
    restaurants.length > 0
      ? (
        <RestaurantProvider restaurants={restaurants}>

          <Outlet />

        </RestaurantProvider>
      )
      : <Navigate to="/welcom" state={{ from: location }} replace />
  );
}
export default RequireRestaurant;
