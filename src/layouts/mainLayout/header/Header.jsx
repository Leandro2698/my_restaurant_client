import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AccountCircle, Menu } from '@mui/icons-material';
import {
  AppBar, Avatar, Box, Button, ButtonBase, Toolbar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../../components/Logo';
import { AuthContext } from '../../../context/authContext';

function Header(props) {
  const { logout } = useContext(AuthContext);
  const { drawerOpen, drawerToggle, theme } = props;
  return (
    <AppBar
      enableColorOnDark
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        // todo
        // bgcolor: theme.palette.background.default,
        bgcolor: '#9696f7',
        transition: drawerOpen ? theme.transitions.create('width') : 'none',
      }}
    >
      <Toolbar>

        <Box
          sx={{
            width: 228,
            display: 'flex',
            [theme.breakpoints.down('md')]: {
              width: 'auto',
            },
          }}
        >
          <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
            <Logo />
            {' '}
            Logo
          </Box>
          <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <Avatar
              onClick={drawerToggle}
              color="inherit"
            >
              <Menu stroke={1.5} size="1.3rem" />
            </Avatar>
          </ButtonBase>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ flexGrow: 1 }} />
        <AccountCircle />
        <Button variant="contained" onClick={logout} component={Link} to="/login">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
Header.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  drawerToggle: PropTypes.func.isRequired,
  theme: PropTypes.func.isRequired,
};
export default Header;
