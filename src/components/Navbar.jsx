import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from '@mui/icons-material';
import {
  AppBar, IconButton, Toolbar, Typography,
} from '@mui/material';

function Navbar(props) {
  const { drawerWidth, handleDrawerToggle } = props;
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
Navbar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};
export default Navbar;
