import { useQuery, useReactiveVar } from "@apollo/client";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import SubCard from "../../../../components/Cards/SubCard";
import { GET_ONE_PRODUCT } from "../../../../graphql/queries/user/products/product";
import { restaurantIdVar } from "../../../../reactiveVars";

export default function ProductView() {
  const restaurantId = useReactiveVar(restaurantIdVar);
  const params = useParams();
  const { loading, error, data } = useQuery(GET_ONE_PRODUCT, {
    variables: {
      restaurantId,
      productId: params.id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <p>{data.getProduct.name}</p>
      <Grid item xs={12} sm={6}>
        <SubCard title="subCard">
          <Grid container direction="column" spacing={1}>
            <Grid item>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor tempore impedit facilis beatae ratione
              molestias temporibus nesciunt quas voluptates dolore aperiam aliquam voluptatibus, sint aut natus ex! Hic,
              quidem quaerat.
            </Grid>
            <Grid item>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor tempore impedit facilis beatae ratione
              molestias temporibus nesciunt quas voluptates dolore aperiam aliquam voluptatibus, sint aut natus ex! Hic,
              quidem quaerat.
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SubCard title="subCard">
          <Grid container direction="column" spacing={1}>
            <Grid item>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor tempore impedit facilis beatae ratione
              molestias temporibus nesciunt quas voluptates dolore aperiam aliquam voluptatibus, sint aut natus ex! Hic,
              quidem quaerat.
            </Grid>
            <Grid item>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor tempore impedit facilis beatae ratione
              molestias temporibus nesciunt quas voluptates dolore aperiam aliquam voluptatibus, sint aut natus ex! Hic,
              quidem quaerat.
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </>
  );
}
