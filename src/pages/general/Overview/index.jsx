import React from 'react';
import { Grid } from '@mui/material';
import Total from './Total';
import SalesByProduct from './SalesByProduct';

function Overview() {
  return (
    <Grid
      container
      spacing={3}
    >
      <Grid
        item
        lg={3}
        sm={4}
        xl={3}
        xs={12}
      >

        <Total />
      </Grid>
      <Grid
        item
        lg={3}
        sm={4}
        xl={3}
        xs={12}
      >

        <Total />
      </Grid>
      <Grid
        item
        lg={3}
        sm={4}
        xl={3}
        xs={12}
      >

        <Total />
      </Grid>
      <Grid
        item
        lg={8}
        md={12}
        xl={9}
        xs={12}
      >

        <SalesByProduct />
      </Grid>
    </Grid>

  );
}
export default Overview;
