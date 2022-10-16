/* eslint-disable no-use-before-define */
import { useMutation } from '@apollo/client';
import { Button, Stack, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/authContext';
import restaurant from '../../../../graphql/mutations/restaurant/restaurant';
import restaurantUser from '../../../../graphql/queries/user/restaurants/restaurant';
import useForm from '../../../../hooks/useForm';

function CreateRestaurantForm() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(createRestaurantCallback, {
    name: '',
  });

  const [createRestaurant] = useMutation(restaurant.CREATE_RESTAURANT, {
    variables: { createRestaurantInput: values },
    refetchQueries: [{
      query: restaurantUser.GET_RESTAURANTS,
      variables: { userId: user.id },
    }],
  });
  function createRestaurantCallback() {
    createRestaurant();
    navigate('/');
  }
  return (
    <Stack spacing={3}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <TextField
          name="name"
          label="Name"
          onChange={onChange}
          // Todo : errors
          // error={!!errors.firstname}
          fullWidth
        />
      </Stack>
      <Button
        sx={{ textTransform: 'none' }}
        variant="contained"
        onClick={onSubmit}
      >
        Create
      </Button>
    </Stack>
  );
}
export default CreateRestaurantForm;
