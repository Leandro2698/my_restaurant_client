/* eslint-disable @typescript-eslint/no-use-before-define */
import { useMutation } from "@apollo/client";
import { Button, Grid, TextField } from "@mui/material";
import DialogForm from "../../../../components/Dialogs/DialogForm";
import { UPDATE_RESTAURANT } from "../../../../graphql/mutations/restaurant/restaurant";
import { GET_ALL_RESTAURANTS } from "../../../../graphql/queries/user/restaurants/restaurant";
import useForm from "../../../../hooks/useForm";

export default function EditRestaurant(props: any) {
  const { restaurant, userId, openEditDialog, closeEditDialog } = props;
  const { values, onChange, onSubmit } = useForm(editRestaurantCallback, {
    name: restaurant.name,
  });

  const [editRestaurant] = useMutation(UPDATE_RESTAURANT, {
    variables: {
      restaurantId: restaurant.id,
      createRestaurantInput: values,
    },
    refetchQueries: [
      {
        query: GET_ALL_RESTAURANTS,
        variables: { userId },
      },
    ],
  });

  function editRestaurantCallback() {
    editRestaurant();
  }
  return (
    <DialogForm
      open={openEditDialog}
      handleClose={closeEditDialog}
      actions={
        <>
          <Button
            variant="contained"
            onClick={event => {
              onSubmit(event);
              closeEditDialog();
            }}
          >
            Update
          </Button>
          <Button variant="outlined" onClick={closeEditDialog}>
            Cancel
          </Button>
        </>
      }
      title="Edit product"
    >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
        <Grid item xs={2} sm={4} md={12}>
          <TextField
            name="name"
            label="Name"
            defaultValue={restaurant.name}
            // Todo
            // error={!!errors.firstname}
            fullWidth
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </DialogForm>
  );
}
