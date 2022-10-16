/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useQuery } from '@apollo/client';
import { List } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import restaurantUser from '../../../graphql/queries/user/restaurants/restaurant';
import Restaurant from './Restaurant';

export default function Restaurants() {
  const { user } = useContext(AuthContext);

  const { loading, error, data } = useQuery(restaurantUser.GET_RESTAURANTS, {
    variables: { userId: user.id },
  });

  if (loading) return 'Loading...';

  if (error) return `Error main! ${error.message}`;

  const restaurantsUser = data.getUser.restaurants;
  console.log('rest', restaurantsUser);

  return (
    <List>
      {restaurantsUser.map((e) => (
        <Restaurant key={e.id} restaurant={e} userId={user.id} />

      ))}

    </List>
  );
}
