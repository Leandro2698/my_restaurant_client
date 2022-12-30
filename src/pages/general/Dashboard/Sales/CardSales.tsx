import { Paid } from "@mui/icons-material";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { format } from "date-fns";
import MainCard from "../../../../components/Cards/MainCard";
import ChartSales from "./ChartSales";

export default function CardSales(props: any) {
  const { restaurant } = props;
  const allSalesThisMonth: any = [];

  const thisYear = new Date();
  const { products } = restaurant;
  for (let i = 0; i < products.length; i += 1) {
    const turnoverThisMonth = products[i].turnoversProductMonth.filter((e: any) => e.year === format(thisYear, "yyyy"));
    for (let u = 0; u < turnoverThisMonth.length; u += 1) {
      allSalesThisMonth.push({
        month: turnoverThisMonth[u].month,
        sales: turnoverThisMonth[u].sales,
      });
    }
  }
  const totalSalesYear = allSalesThisMonth
    .map((e: any) => e.sales)
    .reduce((accumulator: any, value: any) => accumulator + value, 0);

  return (
    <MainCard header={false}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="h5">Total sales this year</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3"> {totalSalesYear}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ChartSales allSalesThisMonth={allSalesThisMonth} />
        </Grid>
      </Grid>
    </MainCard>
  );
}
