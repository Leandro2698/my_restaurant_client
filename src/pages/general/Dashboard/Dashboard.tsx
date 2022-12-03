import { useQuery, useReactiveVar } from "@apollo/client";
import { Grid } from "@mui/material";
import { GET_ONE_RESTAURANT } from "../../../graphql/queries/user/restaurants/restaurant";
import CardSales from "./Sales/CardSales";
import CardTurnover from "./TurnoversRestaurant/CardTurnover";
import CardPieChartProducts from "./pieChartProducts/CardPieChartProducts";
import { restaurantIdVar } from "../../../reactiveVars";
import BarCardTurnoversProducts from "./BarChartTurnoversProducts/CardBarTurnoversProducts";

export default function Dashboard() {
  const restaurantId = useReactiveVar(restaurantIdVar);
  const { loading, error, data } = useQuery(GET_ONE_RESTAURANT, {
    variables: { restaurantId },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  const { restaurant } = data;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <CardTurnover restaurant={restaurant} />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <CardSales restaurant={restaurant} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <BarCardTurnoversProducts restaurant={restaurant} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardPieChartProducts restaurant={restaurant} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
