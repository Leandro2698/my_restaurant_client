/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { useContext } from "react";
import { useMutation, useReactiveVar } from "@apollo/client";
import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/authContext";
import { UPDATE_RESTAURANT } from "../../../../graphql/mutations/restaurant/restaurant";
import { GET_ALL_RESTAURANTS } from "../../../../graphql/queries/user/restaurants/restaurant";
import useForm from "../../../../hooks/useForm";
import { restaurantIdVar } from "../../../../ApolloProvider";

function EditRestaurantForm() {
  const navigate = useNavigate();
  const { user } = useContext<any>(AuthContext);
  const restaurantId = useReactiveVar(restaurantIdVar);
  const { values, onChange, onSubmit } = useForm(editRestaurantCallback, {
    name: "",
  });

  const [editRestaurant] = useMutation(UPDATE_RESTAURANT, {
    variables: {
      restaurantId,
      createRestaurantInput: values,
    },
    // Refetch dont work sometime
    refetchQueries: [
      {
        query: GET_ALL_RESTAURANTS,
        variables: { userId: user.id },
      },
    ],
  });
  function editRestaurantCallback() {
    editRestaurant();
    navigate("/restaurants/List");
  }
  return (
    <Stack spacing={3}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <TextField
          name="name"
          label="Name"
          onChange={onChange}
          // Todo : errors
          // error={!!errors.firstname}
          fullWidth
        />
      </Stack>
      <Button sx={{ textTransform: "none" }} variant="contained" onClick={onSubmit}>
        Update
      </Button>
    </Stack>
  );
}
export default EditRestaurantForm;
