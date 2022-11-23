import { Paid } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import MainCard from "../../../../components/Cards/MainCard";
import ChartTurnoversProducts from "./ChartTurnoversProducts";

export default function CardTurnoversProducts() {
  return (
    <MainCard header={false}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="subtitle2">Total Growth</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">$2,324.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ChartTurnoversProducts />
        </Grid>
      </Grid>
    </MainCard>
  );
}
