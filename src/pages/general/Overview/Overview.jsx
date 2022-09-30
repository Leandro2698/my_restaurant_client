import React from 'react';
import { Container, Grid } from '@mui/material';
import Total from './Total';
import SalesByProduct from './SalesByProduct';

function Overview() {
  return (
    <Container maxWidth={false}>
      <Grid
        container
        spacing={3}
      >
        <Total />
        <Total />
        <SalesByProduct />
      </Grid>
    </Container>
  );
}
export default Overview;
