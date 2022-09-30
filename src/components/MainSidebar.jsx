import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Divider, Drawer, List,
  ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar,
} from '@mui/material';
import { Inbox, Mail } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import MenuBar from './MainNavbar';

function Sidebar(props) {
  const { window, drawerWidth } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/"
          >
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/acount"
          >
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="Acount" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/product"
          >
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Product" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <MenuBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
  drawerWidth: PropTypes.number.isRequired,
};
Sidebar.defaultProps = {
  window: undefined,
};

export default Sidebar;
