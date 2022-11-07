import { TableRow, TableCell, Box, Avatar, ListItemText, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import ActionsProduct from "./productActions/ActionsProduct";

export default function RowProducts(props: any) {
  const { product, restaurantId } = props;

  const theme = useTheme();

  return (
    <TableRow>
      <TableCell />
      <TableCell>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Avatar sx={{ mr: 2 }}>{product.name.charAt(0)} </Avatar>
          <Link
            component={RouterLink}
            to={`/product/${product.id}`}
            sx={{ textDecoration: "none", textTransform: "none", color: theme.palette.grey[100] }}
            underline="hover"
          >
            {product.name}
          </Link>
        </Box>
      </TableCell>

      <TableCell>
        <ListItemText primary={`$${product.unitSalePrice}`} />
      </TableCell>
      <TableCell>
        <ListItemText primary={product.sold} />
      </TableCell>
      <TableCell>
        <ListItemText primary={`$${product.turnover ? product.turnover : "0"}`} secondary="This year" />
      </TableCell>
      <TableCell>
        <ListItemText primary={product.status} />
      </TableCell>
      <TableCell>
        <ListItemText primary={product.category} />
      </TableCell>
      <TableCell align="right">
        <ActionsProduct restaurantId={restaurantId} product={product} />
      </TableCell>
    </TableRow>
  );
}
