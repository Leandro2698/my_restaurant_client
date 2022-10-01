import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { useQuery } from '@apollo/client';
import TableCard from '../../../components/Cards/TableCard';
import getRestaurantsUser from '../../../apollo/queries/user/restaurants/getRestaurantsUser';
import { AuthContext } from '../../../context/authContext';

function SalesByProduct() {
  const { user } = useContext(AuthContext);
  const userId = user.id;
  const { loading, error, data } = useQuery(getRestaurantsUser.MY_RESTAURANTS, {
    variables: { userId },

  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const restaurantsUser = data.getUser.restaurants;
  // console.log('restrestaurantsUser', restaurantsUser);
  // console.log('saleprod data', data.getUser.restaurants.map((e) => e.id));
  return (

    <Grid
      item
      lg={8}
      md={12}
      xl={9}
      xs={12}
    >

      <TableCard restaurants={restaurantsUser} />
    </Grid>
  );
}
export default SalesByProduct;
