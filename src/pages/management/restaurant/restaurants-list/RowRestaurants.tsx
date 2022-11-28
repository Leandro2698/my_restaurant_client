import { TableRow, TableCell, Box, Avatar, ListItemText, Link } from "@mui/material";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { AuthContext } from "../../../../context/authContext";
import ActionsRestaurant from "./ActionsRestaurant";
import { RowRestaurantsProps } from "../types";

export default function RowRestaurants(props: RowRestaurantsProps) {
  const { user } = useContext<any>(AuthContext);
  const theme = useTheme();
  const { restaurant } = props;
  return (
    <TableRow hover>
      <TableCell />
      <TableCell>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Avatar sx={{ mr: 2 }}>{restaurant.name.charAt(0)} </Avatar>
          <Link
            component={RouterLink}
            to={`/restaurant/${restaurant._id}`}
            sx={{ textDecoration: "none", textTransform: "none", color: theme.palette.grey[100] }}
            underline="hover"
          >
            {restaurant.name}
          </Link>
        </Box>
      </TableCell>

      <TableCell>
        <ListItemText primary={`$${restaurant.turnover ? restaurant.turnover : "0"}`} secondary="This year" />
      </TableCell>
      <TableCell>
        <ListItemText primary={`${restaurant.sales ? restaurant.sales : "0"}`} secondary="This year" />
      </TableCell>
      <TableCell align="right">
        <ActionsRestaurant restaurant={restaurant} userId={user.id} />
      </TableCell>
    </TableRow>
  );
}
