import { useContext } from "react";
import { Grid } from "@mui/material";
import Total from "./Total";
import SalesByProduct from "./SalesByProduct";
import { RestaurantContext } from "../../../context/RestaurantContext";

function Overview() {
  const { restaurant } = useContext<any>(RestaurantContext);
  return (
    <Grid container spacing={3}>
      <Grid item lg={3} sm={4} xl={3} xs={12}>
        <Total />
      </Grid>
      <Grid item lg={3} sm={4} xl={3} xs={12}>
        <Total />
      </Grid>
      <Grid item lg={3} sm={4} xl={3} xs={12}>
        <Total />
      </Grid>
      <Grid item lg={8} md={12} xl={9} xs={12}>
        <SalesByProduct restaurant={restaurant} />
      </Grid>
    </Grid>
  );
}
export default Overview;
