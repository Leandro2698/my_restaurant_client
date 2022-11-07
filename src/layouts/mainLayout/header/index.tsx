/* eslint-disable import/no-cycle */
/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import { Menu } from "@mui/icons-material";
import { AppBar, Avatar, Box, ButtonBase, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo";
import ProfileHeader from "./ProfileHeader";
import { HeaderProps } from "../types";

function Header(props: HeaderProps) {
  const { drawerOpen, drawerToggle, theme } = props;
  return (
    <AppBar
      enableColorOnDark
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        // todo
        transition: drawerOpen ? theme.transitions.create("width") : "none",
      }}
    >
      <Toolbar sx={{ padding: "20px" }}>
        <Box
          sx={{
            width: 228,
            display: "flex",
            [theme.breakpoints.down("md")]: {
              width: "auto",
            },
          }}
        >
          <Box component="span" sx={{ display: { xs: "none", md: "flex", alignItems: "center" }, flexGrow: 1 }}>
            <ButtonBase disableRipple component={Link} to="/">
              <Logo />
            </ButtonBase>
          </Box>
        </Box>
        <ButtonBase sx={{ borderRadius: "4px", overflow: "hidden" }}>
          <Avatar
            variant="rounded"
            sx={{ backgroundColor: "rgba(116, 155, 210, 0.2)" }}
            aria-label="menu"
            onClick={drawerToggle}
          >
            <Menu color="primary" />
          </Avatar>
        </ButtonBase>
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
