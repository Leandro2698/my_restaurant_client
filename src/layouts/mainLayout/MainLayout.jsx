import React, { useState } from 'react';
import {
  Box, CssBaseline,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useTheme, styled } from '@mui/material/styles';
import NavGroup from './sidebar/Sidebar';
import Header from './header/Header';

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
      marginLeft: -(drawerWidth - 20),
      width: `calc(100% - ${drawerWidth}px)`,
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
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
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header drawerOpen={open} drawerToggle={handleDrawerToggle} theme={theme} />
      <NavGroup drawerOpen={open} drawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
      <Main
        sx={{
          minHeight: 'calc(100vh - 88px)',
          flexGrow: 1,
          marginTop: '88px',
        }}
        theme={theme}
        open={open}
      >
        <h1>MainLAYOU Outlet</h1>

        <Outlet />
      </Main>
    </Box>
  );
}

export default MainLayout;
