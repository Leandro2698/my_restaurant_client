import { Grid } from "@mui/material";
import MiniCard from "../../../components/Cards/MiniCard";

function Total() {
  return (
    <Grid item xs={12} lg={4} sm={4} xl={4}>
      <MiniCard sx={{ color: "red" }} />
    </Grid>
  );
}
export default Total;
