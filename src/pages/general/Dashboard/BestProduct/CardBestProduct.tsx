/* eslint-disable import/no-cycle */
import { useQuery } from "@apollo/client";
import { ButtonBase, Grid, Link, Typography } from "@mui/material";
import { format } from "date-fns";
import MainCard from "../../../../components/Cards/MainCard";
import { GET_ALL_PRODUCTS } from "../../../../graphql/queries/user/products/product";
// import ChartSales from "./ChartSales";

export default function CardBestProduct(props: any) {
  const { restaurant } = props;
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS, {
    variables: { restaurantId: restaurant.id },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error card best product! {error.message}</p>;

  const products = data.getProducts;
  const thisYear = new Date();
  const turnoversProducts: any = [];
  for (let i = 0; i < products.length; i += 1) {
    const turnoverThisYear = products[i]?.turnoversProductYear.filter(
      (e: any) => e?.createdAt === format(thisYear, "yyyy")
    );

    for (let u = 0; u < turnoverThisYear.length; u += 1) {
      turnoversProducts.push({
        name: products[i].name,
        price: products[i].unitSalePrice,
        sales: turnoverThisYear[u].totalSales,
        turnoverYear: turnoverThisYear[u].turnoverYear,
      });
    }
  }
  const maxSales = Math.max(...turnoversProducts.map((product: any) => product.sales));
  const bestProductYear = turnoversProducts.filter((product: any) => product.sales === maxSales);
  return (
    <MainCard title="Best Product">
      {bestProductYear.map((e: any) => (
        <>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 100, height: 100 }}>Img {e.name}</ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {e.name}
                  </Typography>
                  <Typography variant="caption" gutterBottom>
                    {e.sales} sales
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price ${e.price}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    Turnover this year
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    ${e.turnoverYear}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Link
            variant="subtitle2"
            // component={RouterLink}
            href="/register"
          >
            Register
          </Link>
        </>
      ))}
    </MainCard>
  );
}
