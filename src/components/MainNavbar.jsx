/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import { Menu } from '@mui/icons-material';
import {
  AppBar, Button, IconButton, Stack, Toolbar, Typography,
} from '@mui/material';
import { AuthContext } from '../context/authContext';

function MenuBar(props) {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
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

        <Stack direction="row" spacing={5}>
          {user ? (
            <>
              <Typography variant="h6" noWrap component="div">
                {user.email}
              </Typography>

              <Button variant="contained" onClick={logout} component={RouterLink} to="/login">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Typography variant="subtitle2" component={RouterLink} to="/register">
                Register
              </Typography>
              <Typography variant="subtitle2" component={RouterLink} to="/login">
                Login
              </Typography>
            </>
          )}

        </Stack>
      </Toolbar>
    </AppBar>
  );
}
MenuBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};
export default MenuBar;
