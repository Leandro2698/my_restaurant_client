import { useQuery, useReactiveVar } from "@apollo/client";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { format } from "date-fns";
import { Add } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { GET_ALL_PRODUCTS } from "../../../../graphql/queries/user/products/product";
import MainCard from "../../../../components/Cards/MainCard";
import MainTable from "../../../../components/Tables/MainTable";
import RowProducts from "./RowProducts";
import AddProduct from "./AddProduct";
import { restaurantIdVar } from "../../../../reactiveVars";

export default function ListProducts() {
  const restaurantId = useReactiveVar(restaurantIdVar);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const handleClickAdd = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS, {
    variables: { restaurantId },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error list product! {error.message}</p>;

  const listProducts = data.getProducts;

  const products: any = [];

  const thisYear = new Date();

  for (let i = 0; i < listProducts.length; i += 1) {
    const turnoverProductThisYear = listProducts[i].turnoversProductYear.filter(
      (turnover: any) => turnover?.createdAt === format(thisYear, "yyyy")
    );

    products.push({
      id: listProducts[i].id,
      name: listProducts[i].name,
      createdAt: listProducts[i].createdAt,
      unitSalePrice: listProducts[i].unitSalePrice,
      status: listProducts[i].status,
      category: listProducts[i].category,
      totalSales: turnoverProductThisYear[0]?.totalSales,
      turnover: turnoverProductThisYear[0]?.turnoverYear,
    });
  }
  return (
    <>
      <MainCard
        title="List Products"
        action={
          <IconButton onClick={handleClickAdd} sx={{ bgcolor: theme.palette.secondary.light, color: "#fff" }}>
            <Add />
          </IconButton>
        }
        content={false}
      >
        <MainTable tableCells={["Name", "Price", "Sales", "Turnover", "Status", "Category", "Action"]}>
          {products.map((product: any) => (
            <RowProducts key={product.id} product={product} restaurantId={restaurantId} />
          ))}
        </MainTable>
      </MainCard>
      <AddProduct handleClose={handleCloseDialog} open={open} restaurantId={restaurantId} />
    </>
  );
}
