/* eslint-disable @typescript-eslint/no-use-before-define */
import { useMutation } from "@apollo/client";
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import DialogForm from "../../../../components/Dialogs/DialogForm";
import { CREATE_PRODUCT } from "../../../../graphql/mutations/product/product";
import { GET_ALL_PRODUCTS } from "../../../../graphql/queries/user/products/product";
import useForm from "../../../../hooks/useForm";

export default function AddProduct(props: any) {
  const { open, handleClose, restaurantId } = props;

  const { values, onChange, onSubmit } = useForm(createProductCallback, {
    name: "",
    unitSalePrice: "",
    category: "none",
  });

  const [createProduct] = useMutation(CREATE_PRODUCT, {
    variables: {
      restaurantId,
      createProductInput: values,
    },
    refetchQueries: [
      {
        query: GET_ALL_PRODUCTS,
        variables: { restaurantId },
      },
    ],
  });
  function createProductCallback() {
    createProduct();
  }

  return (
    <DialogForm
      open={open}
      handleClose={handleClose}
      actions={
        <>
          <Button
            variant="contained"
            onClick={event => {
              onSubmit(event);
              handleClose();
            }}
          >
            Update
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </>
      }
      title="Edit product"
    >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={6}>
          <TextField
            name="name"
            label="Name"
            // Todo
            // error={!!errors.firstname}
            fullWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={12}>
          <FormControl fullWidth>
            <InputLabel>Categories</InputLabel>
            <Select name="category" onChange={onChange} label="Categories">
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="drink">Drink</MenuItem>
              <MenuItem value="food">Food</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={6} md={12}>
          <TextField
            name="unitSalePrice"
            label="price"
            type="number"
            fullWidth
            InputProps={{
              inputProps: { min: 1 },
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            onChange={onChange}
            // Todo : errors
          />
        </Grid>
      </Grid>
    </DialogForm>
  );
}
