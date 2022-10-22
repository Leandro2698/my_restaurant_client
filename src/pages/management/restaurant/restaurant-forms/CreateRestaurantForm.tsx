/* eslint-disable @typescript-eslint/no-use-before-define */
import { useContext } from "react";
import { useMutation } from "@apollo/client";
import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/authContext";
import { CREATE_RESTAURANT } from "../../../../graphql/mutations/restaurant/restaurant";
import { GET_ALL_RESTAURANTS } from "../../../../graphql/queries/user/restaurants/restaurant";
import useForm from "../../../../hooks/useForm";

function CreateRestaurantForm() {
  const navigate = useNavigate();
  const { user } = useContext<any>(AuthContext);
  const { values, onChange, onSubmit } = useForm(createRestaurantCallback, {
    name: "",
  });

  const [createRestaurant] = useMutation(CREATE_RESTAURANT, {
    variables: { createRestaurantInput: values },
    // Refetch dont work
    refetchQueries: [
      {
        query: GET_ALL_RESTAURANTS,
        variables: { userId: user.id },
      },
    ],
  });
  function createRestaurantCallback() {
    createRestaurant();
    navigate("/");
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
        Create
      </Button>
    </Stack>
  );
}
export default CreateRestaurantForm;
