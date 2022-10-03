import React, { useContext, useState } from 'react';
import {
  Box, CssBaseline, Typography,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useTheme, styled } from '@mui/material/styles';
import Sidebar from './sidebar';
import Header from './header';

import { RestaurantContext } from '../../context/RestaurantContext';

const drawerWidth = 260;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  ...(!open && {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('md')]: {
      marginLeft: -(drawerWidth - 30),
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: '30px',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
      marginRight: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
      marginRight: '10px',
    },
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
    },
  }),
}));
function MainLayout() {
  const theme = useTheme();
  const {
    restaurantActiveId, userRestaurants, restaurant, loading, error,
  } = useContext(RestaurantContext);
  const [open, setOpen] = useState(true);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header
        drawerOpen={open}
        drawerToggle={handleDrawerToggle}
        theme={theme}
      />
      <Sidebar
        restaurantId={restaurantActiveId}
        restaurants={userRestaurants}
        drawerOpen={open}
        drawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />

      <Main
        sx={{
          minHeight: 'calc(100vh - 88px)',
          flexGrow: 1,
          marginTop: '88px',
          bgcolor: '#EBF3FF',
          borderRadius: '5px',
          padding: '20px',
        }}
        theme={theme}
        open={open}
      >
        <Typography variant="h4" color="initial">{loading ? 'load' : restaurant.data.name}</Typography>
        <Outlet />
      </Main>
    </Box>
  );
}

export default MainLayout;
