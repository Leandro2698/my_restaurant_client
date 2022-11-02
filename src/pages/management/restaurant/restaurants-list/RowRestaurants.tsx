import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { TableRow, TableCell, Box, Avatar, IconButton, Collapse, ListItemText, Link } from "@mui/material";
import { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { AuthContext } from "../../../../context/authContext";
import CollapseEditRestaurant from "./CollapseEditRestaurant";
import ActionsRestaurant from "./ActionsRestaurant";
import { RowRestaurantsProps } from "../types";

export default function RowRestaurants(props: RowRestaurantsProps) {
  const { user } = useContext<any>(AuthContext);
  const theme = useTheme();
  const { restaurant } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ borderLeft: open ? "3px solid #3C3EBE" : "", cursor: "pointer" }} hover>
        <TableCell onClick={() => setOpen(!open)} sx={{ borderBottom: "none", width: "0%" }}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell onClick={() => setOpen(!open)} sx={{ borderBottom: "none" }}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Avatar sx={{ mr: 2 }}>{restaurant.name.charAt(0)} </Avatar>
            <Link
              component={RouterLink}
              to={`/restaurant/${restaurant.id}`}
              sx={{ textDecoration: "none", textTransform: "none", color: theme.palette.grey[100] }}
              underline="hover"
            >
              {restaurant.name}
            </Link>
          </Box>
        </TableCell>

        <TableCell
          sx={{
            borderBottom: "none",
          }}
          onClick={() => setOpen(!open)}
        >
          <ListItemText primary={`$${restaurant.turnover ? restaurant.turnover : "0"}`} secondary="This year" />
        </TableCell>
        <TableCell onClick={() => setOpen(!open)} sx={{ borderBottom: "none" }}>
          <ListItemText primary={restaurant.sales} secondary="This year" />
        </TableCell>
        <TableCell align="right" sx={{ borderBottom: "none" }}>
          <ActionsRestaurant restaurantId={restaurant.id} userId={user.id} />
        </TableCell>
      </TableRow>
      <TableRow sx={{ borderLeft: open ? "3px solid #3C3EBE" : "" }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <CollapseEditRestaurant restaurant={restaurant} userId={user.id} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
