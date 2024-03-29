import { Grid, Typography } from "@mui/material";
import { format } from "date-fns";
import MainCard from "../../../../components/Cards/MainCard";
import BarChartTurnoversProducts from "./BarChartTurnoversProducts";

export default function BarCardTurnoversProducts(props: any) {
  const { restaurant } = props;
  const { products } = restaurant;
  const thisYear = new Date();

  const allTurnovers: any = [];
  for (let i = 0; i < products.length; i += 1) {
    const turnoverThisMonth = products[i].turnoversProductMonth.filter((e: any) => e.year === format(thisYear, "yyyy"));
    for (let u = 0; u < turnoverThisMonth.length; u += 1) {
      allTurnovers.push({
        name: products[i].name,
        month: turnoverThisMonth[u].month,
        income: turnoverThisMonth[u].income,
      });
    }
  }
  const turnoversByProduct = allTurnovers.reduce((agg: any, curr: any) => {
    const foundName: any = agg.find((x: any) => x.name === curr.name);
    if (foundName) {
      foundName.turnovers.push({
        income: curr.income,
        month: curr.month,
      });
    } else {
      agg.push({
        name: curr.name,
        turnovers: [
          {
            income: curr.income,
            month: curr.month,
          },
        ],
      });
    }
    return agg;
  }, []);
  const renderTotalTurnover = () => {
    const totalTurnoverYear = allTurnovers
      .map((e: any) => e.income)
      .reduce((accumulator: any, value: any) => accumulator + value, 0);
    return `$${totalTurnoverYear}`;
  };

  return (
    <MainCard header={false}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="h5">Total Growth</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">{renderTotalTurnover()}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <BarChartTurnoversProducts turnoversByProduct={turnoversByProduct} />
        </Grid>
      </Grid>
    </MainCard>
  );
}
