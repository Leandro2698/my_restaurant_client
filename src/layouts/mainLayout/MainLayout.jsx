import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

// ==============================|| MAIN LAYOUT ||============================== //
const drawerWidth = 240;
function MainLayout() {
  return (

    <Box sx={{ display: 'flex' }}>
      <Sidebar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <h1>MAIN LAYOUT Outlet</h1>
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
