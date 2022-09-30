import React from 'react';
import { Grid } from '@mui/material';
// import MiniCard from '../../../components/MiniCard';
import TableCard from '../../../components/TableCard';

function SalesByProduct() {
  return (

    <Grid
      item
      lg={8}
      md={12}
      xl={9}
      xs={12}
    >
      <TableCard title="Title props" />
    </Grid>
  );
}
export default SalesByProduct;
