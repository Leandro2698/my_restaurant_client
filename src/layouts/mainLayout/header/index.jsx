/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from '@mui/icons-material';
import {
  AppBar, Avatar, Box, ButtonBase, Toolbar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../../components/Logo';
import ProfileHeader from './ProfileHeader';

function Header(props) {
  const {
    drawerOpen, drawerToggle, theme,
  } = props;
  return (
    <AppBar
      enableColorOnDark
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        // todo
        transition: drawerOpen ? theme.transitions.create('width') : 'none',

      }}
    >

      <Toolbar sx={{ padding: '20px' }}>

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
            <ButtonBase disableRipple component={Link} to="/">
              <Logo />
            </ButtonBase>
          </Box>
          <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <Avatar
              variant="rounded"
              color="inherit"
              aria-label="menu"
              onClick={drawerToggle}
            >
              <Menu />
            </Avatar>
          </ButtonBase>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ flexGrow: 1 }} />
        <ProfileHeader />
      </Toolbar>
    </AppBar>
  );
}
Header.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  drawerToggle: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};
export default Header;
