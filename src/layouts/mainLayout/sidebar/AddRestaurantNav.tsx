/* eslint-disable @typescript-eslint/no-use-before-define */
import { useMutation } from "@apollo/client";
import { Button, FormControl, Stack, TextField } from "@mui/material";
import { useState } from "react";
import DialogForm from "../../../components/Dialogs/DialogForm";
import { CREATE_RESTAURANT } from "../../../graphql/mutations/restaurant/restaurant";
import { GET_ALL_RESTAURANTS } from "../../../graphql/queries/user/restaurants/restaurant";
import useForm from "../../../hooks/useForm";
import { AddRestaurantProps } from "../../../pages/management/restaurant/types";

export default function AddRestaurantNav(props: AddRestaurantProps) {
  const { open, handleClose, userId } = props;
  const [errors, setErrors] = useState<any>({});
  const { values, onChange, onSubmit } = useForm(createRestaurantCallback, {
    name: "",
  });

  const [createRestaurant] = useMutation(CREATE_RESTAURANT, {
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
      console.log(`foo`, err.graphQLErrors[0].extensions.errors);
    },
    variables: {
      createRestaurantInput: values,
    },
    refetchQueries: [
      {
        query: GET_ALL_RESTAURANTS,
        variables: { userId },
      },
    ],
  });
  function createRestaurantCallback() {
    createRestaurant();
  }

  return (
    <DialogForm
      open={open}
      handleClose={handleClose}
      actions={
        <>
          <Button
            variant="contained"
            onClick={event => {
              onSubmit(event);
              handleClose();
            }}
          >
            Create
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </>
      }
      title="Add restaurant"
    >
      <Stack spacing={3}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <FormControl sx={{ m: 3, minWidth: 200 }}>
            <TextField
              name="name"
              label="Name"
              onChange={onChange}
              // Todo : errors
              fullWidth
            />
          </FormControl>
        </Stack>
      </Stack>
    </DialogForm>
  );
}
