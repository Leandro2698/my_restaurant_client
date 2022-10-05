/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useQuery } from '@apollo/client';
import React, {
  createContext, useEffect, useState,
} from 'react';
import restaurantUser from '../graphql/queries/user/restaurants/Restaurant';

const RestaurantContext = createContext({});

function RestaurantProvider(props) {
  const { restaurants } = props;
  const restaurantIdStorage = window.localStorage.getItem('restaurantId');

  let initialState = restaurants[0].id;

  if (restaurantIdStorage !== null) {
    initialState = restaurantIdStorage;
  }

  const [selectedRestaurantId, setSelectedRestaurantId] = useState(initialState);

  useEffect(() => {
    const restaurantId = window.localStorage.getItem('restaurantId');
    if (restaurantId !== null) setSelectedRestaurantId((restaurantId));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('restaurantId', (selectedRestaurantId));
  }, [selectedRestaurantId]);
  function changeRestaurant(id) {
    setSelectedRestaurantId(id);
  }
  const { loading, error, data } = useQuery(restaurantUser.GET_RESTAURANT, {
    variables: { restaurantId: selectedRestaurantId },

  });
  return (
    <RestaurantContext.Provider
      value={{
        changeRestaurant,
        restaurantActiveId: selectedRestaurantId,
        userRestaurants: restaurants,
        restaurant: data,
        error,
        loading,

      }}
      {...props}
    />
  );
}

export { RestaurantContext, RestaurantProvider };
