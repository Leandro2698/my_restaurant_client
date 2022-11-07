/* eslint-disable @typescript-eslint/no-use-before-define */
import { useMutation } from "@apollo/client";
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import DialogForm from "../../../../../components/Dialogs/DialogForm";
import { UPDATE_PRODUCT } from "../../../../../graphql/mutations/product/product";
import { GET_ALL_PRODUCTS } from "../../../../../graphql/queries/user/products/product";
import useForm from "../../../../../hooks/useForm";

export default function EditProduct(props: any) {
  const { restaurantId, product, openEdit, closeEdit } = props;

  const { values, onChange, onSubmit } = useForm(editProductCallback, {
    name: product.name,
    unitSalePrice: product.unitSalePrice,
    status: product.status,
    category: product.category,
  });

  const [editProduct] = useMutation(UPDATE_PRODUCT, {
    variables: {
      restaurantId,
      productId: product.id,
      updateProductInput: values,
    },
    refetchQueries: [
      {
        query: GET_ALL_PRODUCTS,
        variables: { restaurantId },
      },
    ],
  });

  function editProductCallback() {
    editProduct();
  }
  return (
    <DialogForm
      open={openEdit}
      handleClose={closeEdit}
      actions={
        <>
          <Button
            variant="contained"
            onClick={event => {
              onSubmit(event);
              closeEdit();
            }}
          >
            Update
          </Button>
          <Button variant="outlined" onClick={closeEdit}>
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
            defaultValue={product.name}
            // Todo
            // error={!!errors.firstname}
            fullWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select name="status" onChange={onChange} label="status" defaultValue={product.status}>
              <MenuItem value="draft">Draft</MenuItem>
              <MenuItem value="published">Published</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <FormControl fullWidth>
            <InputLabel>Categories</InputLabel>
            <Select name="category" onChange={onChange} label="Categories" defaultValue={product.category}>
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="drink">Drink</MenuItem>
              <MenuItem value="food">Food</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <TextField
            name="unitSalePrice"
            label="price"
            type="number"
            defaultValue={product.unitSalePrice}
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
