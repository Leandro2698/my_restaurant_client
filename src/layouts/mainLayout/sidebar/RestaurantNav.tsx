/* eslint-disable import/no-cycle */
import { useEffect, useState } from "react";
import { Box, Button, Chip, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Add } from "@mui/icons-material";

import Zoom from "@mui/material/Zoom";
import { Link } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { restaurantIdVar } from "../../../ApolloProvider";
import { RestaurantNavProps } from "../types";
import { Restaurant } from "../../../context/types";

function RestaurantNav(props: RestaurantNavProps) {
  const { restaurants } = props;
  const restaurantId = useReactiveVar(restaurantIdVar);
  const theme = useTheme();
  const [selected, setSelected] = useState(restaurantId);

  const handleClick = (_event: any, restaurant: Restaurant) => {
    setSelected(restaurant.id);
    restaurantIdVar(restaurant.id);
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
          padding: "16px",
          justifyContent: "center",
        }}
      >
        {restaurants.length > 0
          ? restaurants.map(restaurant => (
              <Box key={restaurant.id} sx={{ display: "flex", flexDirection: "column" }}>
                <Tooltip key={restaurant.id} title={restaurant.name} placement="top" arrow TransitionComponent={Zoom}>
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
                {selected === restaurant.id ? (
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
      <IconButton
        sx={{ bgcolor: theme.palette.secondary.light, color: "#fff" }}
        to="/restaurants/create"
        component={Link}
      >
        <Add />
      </IconButton>
    </>
  );
}

export default RestaurantNav;
