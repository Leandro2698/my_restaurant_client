/* eslint-disable @typescript-eslint/no-use-before-define */
import { useMutation } from "@apollo/client";
import { Box, Button, Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import { UPDATE_RESTAURANT } from "../../../../graphql/mutations/restaurant/restaurant";
import { GET_ALL_RESTAURANTS } from "../../../../graphql/queries/user/restaurants/restaurant";
import useForm from "../../../../hooks/useForm";
import { CollapseEditRestaurantProps } from "../types";

export default function CollapseEditRestaurant(props: CollapseEditRestaurantProps) {
  const { restaurant, userId } = props;
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
        <Grid item xs={6}>
          <Typography gutterBottom variant="h3">
            Basic details
          </Typography>
          <Divider />
          <Stack spacing={3} pt={2}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                name="name"
                label="Name"
                defaultValue={restaurant.name}
                // Todo
                // error={!!errors.firstname}
                fullWidth
                onChange={onChange}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom variant="h3">
            Products
          </Typography>
          <Divider />
          <Stack spacing={3} pt={2}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField disabled name="Name" label="Todo !!!!" fullWidth />
            </Stack>
          </Stack>
        </Grid>
        <Stack direction="row" justifyContent="space-between" spacing={2} pl={3} pt={2} pb={2} width="100%">
          <Stack direction="row" spacing={2}>
            <Button sx={{ textTransform: "none" }} variant="contained" onClick={onSubmit}>
              Update
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Box>
  );
}
