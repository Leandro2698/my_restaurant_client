import { Delete, Edit, Visibility } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { DELETE_RESTAURANT } from "../../../../graphql/mutations/restaurant/restaurant";
import { GET_ALL_RESTAURANTS } from "../../../../graphql/queries/user/restaurants/restaurant";
import { ActionsRestaurantProps } from "../types";
import EditRestaurant from "./EditRestaurant";

export default function ActionsRestaurant(props: ActionsRestaurantProps) {
  const { restaurant, userId } = props;
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const HandleOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const closeEditDialog = () => {
    setOpenEditDialog(false);
  };

  const [deleteRestaurant, { error }] = useMutation<{ deleteRestaurant: any }>(DELETE_RESTAURANT, {
    variables: { restaurantId: restaurant._id },
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
      <Tooltip title="Edit restaurant">
        <IconButton aria-label="see" size="small" onClick={HandleOpenEditDialog}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="see">
        <IconButton aria-label="see" size="small" component={Link} to={`/restaurant/${restaurant._id}`}>
          <Visibility />
        </IconButton>
      </Tooltip>
      <Tooltip title="delete">
        <IconButton aria-label="delete" size="small" onClick={() => deleteRestaurant()}>
          <Delete />
        </IconButton>
      </Tooltip>
      <EditRestaurant
        restaurant={restaurant}
        userId={userId}
        openEditDialog={openEditDialog}
        closeEditDialog={closeEditDialog}
      />
    </>
  );
}
