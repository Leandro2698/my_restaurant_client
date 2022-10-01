import React from 'react';
import { Container, Grid } from '@mui/material';
import Total from './Total';
import SalesByProduct from './SalesByProduct';

function Overview() {
  return (
    <Container>
      <Grid
        container
        spacing={3}
      >
        <SalesByProduct />
        <Total />
        <Total />
      </Grid>
    </Container>
  );
}
export default Overview;
