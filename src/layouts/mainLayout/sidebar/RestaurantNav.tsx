import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Button, ButtonBase, Chip, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        padding: "16px",
      }}
    >
      {restaurants.length > 0
        ? restaurants.map(restaurant => (
            <Box key={restaurant.id} sx={{ display: "flex", flexDirection: "column" }}>
              <Tooltip key={restaurant.id} title={restaurant.name} placement="top" arrow TransitionComponent={Zoom}>
                <ButtonBase
                  onClick={event => handleClick(event, restaurant)}
                  sx={{ borderRadius: "4px", overflow: "hidden" }}
                >
                  <Avatar variant="rounded">{restaurant.name.charAt(0)}</Avatar>
                </ButtonBase>
              </Tooltip>
              {selected === restaurant.id ? (
                <Chip
                  aria-controls="menu-list-grow"
                  sx={{
                    transition: "all .2s ease-in-out",
                    borderColor: theme.palette.primary.light,
                    backgroundColor: theme.palette.primary.light,
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

      <Button to="/create-restaurant" component={Link}>
        Add resto
      </Button>
    </Box>
  );
}

export default RestaurantNav;
