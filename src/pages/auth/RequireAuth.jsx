import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { RestaurantProvider } from '../../context/RestaurantContext';
import restaurantUser from '../../graphql/queries/user/restaurants/restaurant';

function RequireAuth() {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [restaurants, setRestaurants] = useState([]);
  if (user) {
    const { loading, data } = useQuery(restaurantUser.GET_RESTAURANTS, {
      variables: { userId: user.id },
    });

    useEffect(() => {
      if (!loading) {
        setRestaurants(data.getUser.restaurants);
      }
    }, [data]);
  }

  if (user) {
    return (
      <RestaurantProvider userId={user.id} userRestaurants={restaurants}>

        <Outlet />
      </RestaurantProvider>
    );
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}
export default RequireAuth;
