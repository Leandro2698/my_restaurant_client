import { TableRow, TableCell, Box, Avatar, ListItemText, Link, Chip, Typography, CardMedia } from "@mui/material";
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
          <Avatar
            src="https://pixabay.com/fr/photos/sandwich-aliments-nourriture-volante-2977251/"
            variant="square"
            sx={{ width: 100, height: 100, mr: 2 }}
            alt={product.name}
          />
          <Link
            component={RouterLink}
            to={`/product/${product.id}`}
            sx={{ textDecoration: "none", textTransform: "capitalize", color: theme.palette.grey[100] }}
            underline="hover"
            variant="h4"
          >
            {product.name}
          </Link>
        </Box>
      </TableCell>

      <TableCell>
        <ListItemText primary={<Typography variant="h6">{`$${product.unitSalePrice}`}</Typography>} />
      </TableCell>
      <TableCell>
        <ListItemText
          primary={<Typography variant="h6">{`${product.totalSales ? product.totalSales : "0"}`}</Typography>}
          secondary="This year"
        />
      </TableCell>
      <TableCell>
        <ListItemText
          primary={<Typography variant="h6">{`$${product.turnover ? product.turnover : "0"}`}</Typography>}
          secondary="This year"
        />
      </TableCell>
      <TableCell>
        <Chip color={product.status === "published" ? "success" : "warning"} label={product.status} variant="filled" />
        <ListItemText />
      </TableCell>
      <TableCell>
        <ListItemText
          sx={{ textTransform: "uppercase" }}
          primary={<Typography variant="h6">{product.category}</Typography>}
        />
      </TableCell>
      <TableCell align="right">
        <ActionsProduct restaurantId={restaurantId} product={product} />
      </TableCell>
    </TableRow>
  );
}
