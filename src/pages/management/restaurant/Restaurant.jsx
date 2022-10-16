/* eslint-disable react/prop-types */
import { useMutation } from '@apollo/client';
import { Delete } from '@mui/icons-material';
import { IconButton, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import restaurantMut from '../../../graphql/mutations/restaurant/restaurant';
import restaurantUser from '../../../graphql/queries/user/restaurants/restaurant';

export default function Restaurant(props) {
  const { restaurant, userId } = props;

  const [deleteRestaurant, { error }] = useMutation(restaurantMut.DELETE_RESTAURANT, {
    variables: { restaurantId: restaurant.id },
    refetchQueries: [{
      query: restaurantUser.GET_RESTAURANTS,
      variables: { userId },
    }],
  });
  console.log('error', error);
  return (
    <ListItem
      secondaryAction={(
        <IconButton onClick={deleteRestaurant} edge="end" aria-label="delete">
          <Delete />
        </IconButton>
                  )}
    >
      <ListItemText
        primary={restaurant.name}
      />
    </ListItem>
  );
}
