import { Delete, Visibility } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_RESTAURANT } from "../../../../graphql/mutations/restaurant/restaurant";
import { GET_ALL_RESTAURANTS } from "../../../../graphql/queries/user/restaurants/restaurant";
import { ActionsRestaurantProps } from "../types";

export default function ActionsRestaurant(props: ActionsRestaurantProps) {
  const { restaurantId, userId } = props;

  const [deleteRestaurant, { error }] = useMutation<{ deleteRestaurant: any }>(DELETE_RESTAURANT, {
    variables: { restaurantId },
    refetchQueries: [
      {
        query: GET_ALL_RESTAURANTS,
        variables: { userId },
      },
    ],
  });

  if (error) return <p>{error.message}</p>;
  return (
    <>
      <Tooltip title="see">
        <IconButton aria-label="see" size="small" component={Link} to={`/restaurant/${restaurantId}`}>
          <Visibility />
        </IconButton>
      </Tooltip>
      <Tooltip title="delete">
        <IconButton aria-label="delete" size="small" onClick={() => deleteRestaurant()}>
          <Delete />
        </IconButton>
      </Tooltip>
    </>
  );
}
