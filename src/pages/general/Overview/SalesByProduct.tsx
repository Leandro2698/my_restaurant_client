import { Button, Grid } from "@mui/material";
import MainCard from "../../../components/Cards/MainCard";
import { SalesByProductProps } from "./type";

function SalesByProduct(props: SalesByProductProps) {
  const { visualisation, removeVisualisation } = props;
  return (
    <Grid item xs={12} lg={12} md={12} xl={12}>
      <MainCard sx={{ color: "black" }} title="table title">
        <div>
          <Button color="secondary" onClick={() => removeVisualisation(visualisation.id)}>
            Remove
          </Button>
          <p>{visualisation.id}</p>
          <p>{visualisation.name}</p>
        </div>
      </MainCard>
    </Grid>
  );
}
export default SalesByProduct;
