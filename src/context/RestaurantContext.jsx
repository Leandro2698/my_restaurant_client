/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import { useQuery } from '@apollo/client';
import React, {
  createContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import restaurantUser from '../graphql/queries/user/restaurants/restaurant';

const RestaurantContext = createContext({});

function RestaurantProvider(props) {
  const { userId, userRestaurants } = props;
  const [restaurants, setRestaurants] = useState(userRestaurants);

  const { loading, error, data } = useQuery(restaurantUser.GET_RESTAURANTS, {
    variables: { userId },
  });

  useEffect(() => {
    if (!loading) {
      setRestaurants(data.getUser.restaurants);
    }
  }, [data]);
  return (
    <RestaurantContext.Provider
      value={{
        userRestaurants: restaurants,
        loading,
        error,

      }}
      {...props}
    />
  );
}

RestaurantProvider.propTypes = {
  userId: PropTypes.string.isRequired,
  userRestaurants: PropTypes.array.isRequired,
};

export { RestaurantContext, RestaurantProvider };
