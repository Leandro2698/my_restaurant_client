/* eslint-disable react/forbid-prop-types */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Box, ButtonBase, Chip, Tooltip,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Zoom from '@mui/material/Zoom';
import { RestaurantContext } from '../../../context/RestaurantContext';

function ChooseRestaurant(props) {
  const { restaurants, restaurantId } = props;
  const theme = useTheme();
  const { changeRestaurant } = useContext(RestaurantContext);
  const [selected, setSelected] = useState(restaurantId);

  const handleClick = (event, id) => {
    setSelected(id);
    changeRestaurant(id);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        padding: '16px',
      }}
    >
      {restaurants.map((restaurant) => (
        <Box key={restaurant.id} sx={{ display: 'flex', flexDirection: 'column' }}>

          <Tooltip key={restaurant.id} title={restaurant.name} placement="top" arrow TransitionComponent={Zoom}>

            <ButtonBase
              onClick={(event) => handleClick(event, restaurant.id)}
              sx={{ borderRadius: '4px', overflow: 'hidden' }}
            >
              <Avatar variant="rounded">
                {restaurant.name.charAt(0)}
              </Avatar>

            </ButtonBase>
          </Tooltip>
          {selected === restaurant.id ? (

            <Chip
              aria-controls="menu-list-grow"
              sx={{
                transition: 'all .2s ease-in-out',
                borderColor: theme.palette.primary.light,
                backgroundColor: theme.palette.primary.light,
                '& .MuiChip-label': {
                  lineHeight: 0,
                },
                height: '10px',
                marginTop: '5px',
              }}
            />
          ) : '' }

        </Box>
      ))}
    </Box>

  );
}
ChooseRestaurant.propTypes = {
  restaurants: PropTypes.array.isRequired,
  restaurantId: PropTypes.string.isRequired,
};
export default ChooseRestaurant;
