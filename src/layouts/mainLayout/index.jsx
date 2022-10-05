import React, { useContext, useState } from 'react';
import {
  Box, CssBaseline,
} from '@mui/material';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useTheme, styled } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import Sidebar from './sidebar';
import Header from './header';
import { AuthContext } from '../../context/authContext';
import restaurantUser from '../../graphql/queries/user/restaurants/Restaurant';

import { RestaurantProvider } from '../../context/RestaurantContext';

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
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(true);

  const { loading, error, data } = useQuery(restaurantUser.GET_RESTAURANTS, {
    variables: { userId: user.id },
  });
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  if (loading) return 'Loading...';

  if (error) return `Error main! ${error.message}`;

  const { restaurants } = data.getUser;

  return (

    <Box sx={{ display: 'flex' }}>
      {restaurants.length > 0 ? (
        <RestaurantProvider restaurants={restaurants}>

          <>
            <CssBaseline />
            <Header
              drawerOpen={open}
              drawerToggle={handleDrawerToggle}
              theme={theme}
            />
            <Sidebar
            // restaurantId={restaurantActiveId}
              restaurants={restaurants}
              drawerOpen={open}
              drawerToggle={handleDrawerToggle}
              drawerWidth={drawerWidth}
            />
            <Main
              sx={{
                minHeight: 'calc(100vh - 88px)',
                flexGrow: 1,
                marginTop: '88px',
                bgcolor: 'rgba(116, 155, 210, 0.4)',
                borderRadius: '5px',
                padding: '20px',
              }}
              theme={theme}
              open={open}
            >
              <Outlet />
            </Main>
          </>
        </RestaurantProvider>
      )
        : <Navigate to="/first-restaurant" state={{ from: location }} replace /> }
    </Box>
  );
}

export default MainLayout;
