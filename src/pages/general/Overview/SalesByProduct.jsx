import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import TableCard from '../../../components/Cards/TableCard';
import restaurantUser from '../../../apollo/queries/user/restaurants/Restaurant';
import { RestaurantContext } from '../../../context/RestaurantContext';

function SalesByProduct() {
  const { restaurantActiveId } = useContext(RestaurantContext);
  const { loading, error, data } = useQuery(restaurantUser.GET_PRODUCTS, {
    variables: { restaurantId: restaurantActiveId },

  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log('data', data);
  return (

    <TableCard />
  );
}
export default SalesByProduct;
