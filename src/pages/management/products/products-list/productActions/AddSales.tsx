/* eslint-disable @typescript-eslint/no-use-before-define */
import { useMutation } from "@apollo/client";
import { Button, InputAdornment, TextField } from "@mui/material";
import DialogForm from "../../../../../components/Dialogs/DialogForm";
import { SOLD_PRODUCT } from "../../../../../graphql/mutations/product/product";
import { GET_ALL_PRODUCTS } from "../../../../../graphql/queries/user/products/product";
import { GET_ALL_RESTAURANTS } from "../../../../../graphql/queries/user/restaurants/restaurant";
import useForm from "../../../../../hooks/useForm";

export default function AddSales(props: any) {
  const { openDialog, closeDialogSales, restaurantId, product, userId } = props;

  const { values, onChange, onSubmit } = useForm(soldProductCallback, {
    unitProductSold: "",
  });
  const [soldProduct] = useMutation(SOLD_PRODUCT, {
    variables: {
      restaurantId,
      productId: product.id,
      soldProductInput: values,
    },
    refetchQueries: [
      {
        query: GET_ALL_RESTAURANTS,
        variables: { userId },
      },
    ],
  });
  function soldProductCallback() {
    soldProduct();
  }

  return (
    <DialogForm
      open={openDialog}
      handleClose={closeDialogSales}
      actions={
        <>
          <Button
            variant="contained"
            onClick={event => {
              onSubmit(event);
              closeDialogSales();
            }}
          >
            Update
          </Button>
          <Button variant="outlined" onClick={closeDialogSales}>
            Cancel
          </Button>
        </>
      }
      title="Edit product"
    >
      <TextField
        name="unitProductSold"
        label="unitProductSold"
        type="number"
        fullWidth
        InputProps={{
          inputProps: { min: 1 },
          startAdornment: <InputAdornment position="start">u</InputAdornment>,
        }}
        onChange={onChange}
        // Todo : errors
      />
    </DialogForm>
  );
}
