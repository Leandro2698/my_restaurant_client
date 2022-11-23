import { Delete, Edit, PointOfSale, Visibility } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import { DELETE_PRODUCT } from "../../../../../graphql/mutations/product/product";
import { GET_ALL_PRODUCTS } from "../../../../../graphql/queries/user/products/product";
import EditProduct from "./EditProduct";
import AddSales from "./AddSales";
import { AuthContext } from "../../../../../context/authContext";

export default function ActionsProduct(props: any) {
  const { restaurantId, product } = props;
  const { user } = useContext<any>(AuthContext);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openAddSalesDialog, setOpenAddSalesDialog] = useState(false);

  const HandleOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const closeEditDialog = () => {
    setOpenEditDialog(false);
  };
  const HandleOpenSalesDialog = () => {
    setOpenAddSalesDialog(true);
  };

  const closeSalesDialog = () => {
    setOpenAddSalesDialog(false);
  };

  const [deleteProduct, { error }] = useMutation<{ deleteProduct: any }>(DELETE_PRODUCT, {
    variables: { restaurantId, productId: product.id },
    refetchQueries: [
      {
        query: GET_ALL_PRODUCTS,
        variables: { restaurantId },
      },
    ],
  });

  if (error) return <p>({error.message})</p>;
  return (
    <>
      <Tooltip title="Add sales">
        <IconButton onClick={HandleOpenSalesDialog} size="small" sx={{ mr: 2 }}>
          <PointOfSale fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit">
        <IconButton onClick={HandleOpenEditDialog} size="small" sx={{ mr: 2 }}>
          <Edit fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="See product">
        <IconButton component={Link} to={`/product/${product.id}`} size="small" sx={{ mr: 2 }}>
          <Visibility fontSize="small" />
        </IconButton>
      </Tooltip>
      <IconButton onClick={() => deleteProduct()} size="small">
        <Delete />
      </IconButton>

      <EditProduct
        restaurantId={restaurantId}
        product={product}
        openEdit={openEditDialog}
        closeEdit={closeEditDialog}
      />
      <AddSales
        restaurantId={restaurantId}
        product={product}
        userId={user.id}
        openDialog={openAddSalesDialog}
        closeDialogSales={closeSalesDialog}
      />
    </>
  );
}
