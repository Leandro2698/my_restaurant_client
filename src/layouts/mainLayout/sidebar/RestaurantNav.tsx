import { useContext, useEffect, useState } from "react";
import { Box, Button, Chip, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Add } from "@mui/icons-material";

import Zoom from "@mui/material/Zoom";
import { useReactiveVar } from "@apollo/client";
import { RestaurantNavProps } from "../types";
import { Restaurant } from "../../../context/types";
import AddRestaurantNav from "./AddRestaurantNav";
import { AuthContext } from "../../../context/authContext";
import { restaurantIdVar } from "../../../reactiveVars";

function RestaurantNav(props: RestaurantNavProps) {
  const { restaurants } = props;
  const restaurantId = useReactiveVar(restaurantIdVar);
  const { user } = useContext(AuthContext);
  const [selected, setSelected] = useState(restaurantId);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  if (restaurants.length > 0 && restaurantId === "") {
    restaurantIdVar(restaurants[0]._id);
    setSelected(restaurants[0]._id);
  } else {
    // Todo msg for add restaurant first
  }
  const handleClickAdd = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleClick = (_event: React.MouseEvent<HTMLElement>, restaurant: Restaurant) => {
    setSelected(restaurant._id);
    restaurantIdVar(restaurant._id);
  };

  useEffect(() => {
    window.localStorage.setItem("restaurantId", restaurantId);
  }, [restaurantId]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          paddingBottom: "16px",
          justifyContent: "center",
        }}
      >
        {restaurants.length > 0
          ? restaurants.map(restaurant => (
              <Box key={restaurant._id} sx={{ display: "flex", flexDirection: "column" }}>
                <Tooltip key={restaurant._id} title={restaurant.name} placement="top" arrow TransitionComponent={Zoom}>
                  <Button
                    onClick={event => handleClick(event, restaurant)}
                    variant="outlined"
                    sx={{
                      backgroundColor: "#fff",
                      color: "grey.50",
                      textTransform: "uppercase",
                    }}
                  >
                    {restaurant.name.charAt(0)}
                  </Button>
                </Tooltip>
                {selected === restaurant._id ? (
                  <Chip
                    aria-controls="menu-list-grow"
                    sx={{
                      transition: "all .2s ease-in-out",
                      backgroundColor: theme.palette.secondary.light,
                      "& .MuiChip-label": {
                        lineHeight: 0,
                      },
                      height: "10px",
                      marginTop: "5px",
                    }}
                  />
                ) : (
                  ""
                )}
              </Box>
            ))
          : ""}
      </Box>
      <IconButton sx={{ bgcolor: theme.palette.secondary.light, color: "#fff" }} onClick={handleClickAdd}>
        <Add />
      </IconButton>
      <AddRestaurantNav handleClose={handleCloseDialog} open={open} userId={user?.id} />
    </>
  );
}

export default RestaurantNav;
