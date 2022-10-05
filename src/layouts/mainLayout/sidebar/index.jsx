/* eslint-disable react/forbid-prop-types */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  ButtonBase,
  Divider, Drawer, List,
  ListItemButton, ListItemIcon, ListItemText,
  Typography, useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../../components/Logo';
import ChooseRestaurant from './ChooseRestaurant';
import { RestaurantContext } from '../../../context/RestaurantContext';

function Sidebar(props) {
  const {
    drawerWidth,
    drawerOpen,
    drawerToggle,
    restaurants,
  } = props;

  const theme = useTheme();
  const { restaurantActiveId } = useContext(RestaurantContext);
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: '88px',
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >

        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
            <ButtonBase disableRipple component={Link} to="/">
              <Logo />
            </ButtonBase>
          </Box>

        </Box>
        <Box sx={{
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
        >
          <Typography variant="h6" display="block" gutterBottom>
            Restaurants
          </Typography>

          <ChooseRestaurant restaurantId={restaurantActiveId} restaurants={restaurants} />

          <Divider />
        </Box>
        <Box sx={{
          height: matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
        >

          <List
            subheader={(
              <Typography variant="h6" display="block" gutterBottom>
                General
              </Typography>
          )}
          >
            {/* Item TODO update */}
            <ListItemButton
              sx={{
                mb: 0.5, backgroundColor: 'transparent !important', py: 1,
              }}
              component={Link}
              to="/"
            >
              <ListItemIcon>
                todo
              </ListItemIcon>
              <ListItemText
                primary={(
                  <Typography variant="h5" color="inherit">
                    Overview
                  </Typography>
                  )}
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                mb: 0.5, backgroundColor: 'transparent !important', py: 1,
              }}
              component={Link}
              to="/acount"
            >
              <ListItemIcon>
                todo
              </ListItemIcon>
              <ListItemText
                primary={(
                  <Typography variant="h5" color="inherit">
                    Acount
                  </Typography>
                  )}
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                mb: 0.5, backgroundColor: 'transparent !important', py: 1,
              }}
              component={Link}
              to="/product"
            >
              <ListItemIcon>
                todo
              </ListItemIcon>
              <ListItemText
                primary={(
                  <Typography variant="h5" color="inherit">
                    Product
                  </Typography>
                  )}
              />
            </ListItemButton>
          </List>
          <Divider sx={{ mt: 0.25, mb: 1.25 }} />
        </Box>
      </Drawer>
    </Box>
  );
}

Sidebar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  drawerToggle: PropTypes.func.isRequired,
  restaurants: PropTypes.array.isRequired,
};
export default Sidebar;
