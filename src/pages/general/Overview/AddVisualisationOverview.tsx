/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { useContext, useState } from "react";
import { Box, Button, Grid, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import Total from "./Total";
import SalesByProduct from "./SalesByProduct";
import { RestaurantContext } from "../../../context/RestaurantContext";
import DialogForm from "../../../components/Dialogs/DialogForm";
import useForm from "../../../hooks/useForm";

function AddVisualisationOverview() {
  const { restaurant } = useContext<any>(RestaurantContext);
  const [visualisations, setVisualisations] = useState<Array<any>>([]);
  const [open, setOpen] = useState(false);

  const { onChange, onSubmit, values }: any = useForm(addVisualisationCallback, {
    visualisation: "",
  });
  function addVisualisationCallback() {
    setVisualisations([
      ...visualisations,
      {
        id: (visualisations.length - 1 || 0) + 1,
        name: values.visualisation,
      },
    ]);
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const removeVisualisation = (id: number) => {
    const copyVisualisations = [...visualisations];
    const index = copyVisualisations.findIndex(e => e.id === id);
    if (index !== -1) {
      copyVisualisations.splice(index, 1);
      setVisualisations(copyVisualisations);
    }
  };

  const makeVisualisations = (typeVisualisation: any) => {
    if (typeVisualisation.name === "SalesByProduct") {
      return (
        <SalesByProduct
          visualisation={typeVisualisation}
          removeVisualisation={removeVisualisation}
          restaurant={restaurant}
        />
      );
    }
    if (typeVisualisation.name === "TotalSales") {
      return <Total />;
    }
    return null;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add visualisation
      </Button>
      <DialogForm open={open} handleClose={handleClose}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControl sx={{ m: 3, minWidth: 200 }}>
            <InputLabel>Visualisation</InputLabel>
            <Select name="visualisation" onChange={onChange} label="Visualisation" defaultValue="none">
              <MenuItem value="none">
                <em>None</em>
              </MenuItem>
              <MenuItem value="SalesByProduct">Sales By Product</MenuItem>
              <MenuItem value="TotalSales">Total Sales</MenuItem>
            </Select>
          </FormControl>
          <Button
            disabled={Object.values(values).includes("") || Object.values(values).includes("none")}
            sx={{ textTransform: "none" }}
            variant="contained"
            onClick={onSubmit}
          >
            Add
          </Button>
        </Box>
      </DialogForm>
      <Grid container spacing={3}>
        {visualisations.map(e => makeVisualisations(e))}
      </Grid>
    </Box>
  );
}
export default AddVisualisationOverview;
