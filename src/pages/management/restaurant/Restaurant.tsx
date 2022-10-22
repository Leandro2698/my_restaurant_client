/* eslint-disable react/prop-types */
import { useMutation } from "@apollo/client";
import { Delete } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import { GET_ALL_RESTAURANTS } from "../../../graphql/queries/user/restaurants/restaurant";
import { DELETE_RESTAURANT } from "../../../graphql/mutations/restaurant/restaurant";
import { RestaurantProps } from "./types";

export default function Restaurant(props: RestaurantProps) {
  const { restaurant, userId } = props;

  const [deleteRestaurant, { error }] = useMutation<{ deleteRestaurant: any }>(DELETE_RESTAURANT, {
    variables: { restaurantId: restaurant.id },
    refetchQueries: [
      {
        query: GET_ALL_RESTAURANTS,
        variables: { userId },
      },
    ],
  });
  if (error) return <p>{error.message}</p>;
  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={() => deleteRestaurant()} edge="end" aria-label="delete">
          <Delete />
        </IconButton>
      }
    >
      <ListItemText primary={restaurant.name} />
    </ListItem>
  );
}
