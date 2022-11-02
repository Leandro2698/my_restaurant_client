/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-cycle */
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  ButtonBase,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../components/Logo";
import RestaurantNav from "./RestaurantNav";
import { RestaurantContext } from "../../../context/RestaurantContext";
import { SidebarProps } from "../types";
import { SidebarData } from "./SidebarData";

function Sidebar(props: SidebarProps) {
  const { drawerWidth, drawerOpen, drawerToggle } = props;
  const { userRestaurants }: any = useContext(RestaurantContext);
  const location = useLocation();

  const theme = useTheme();
  function active(e: string) {
    if (location.pathname === `${e}`) {
      return true;
    }
    return false;
  }

  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : "auto" }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            color: theme.palette.text.primary,
            borderRight: "none",
            [theme.breakpoints.up("md")]: {
              top: "88px",
            },
            gap: "20px",
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Box sx={{ display: "flex", p: 2, mx: "auto" }}>
            <ButtonBase disableRipple component={Link} to="/">
              <Logo />
            </ButtonBase>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <RestaurantNav restaurants={userRestaurants} />
        </Box>
        <Box
          sx={{
            height: matchUpMd ? "calc(100vh - 56px)" : "calc(100vh - 88px)",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <Divider sx={{ mt: 0.25, mb: 1.25 }} />
          <List
            subheader={
              <Typography variant="h4" display="block" gutterBottom>
                General
              </Typography>
            }
          >
            {SidebarData.map((e: any, i: any) =>
              e.subtitle === "general" ? (
                <ListItemButton
                  sx={{
                    mb: 0.5,
                    backgroundColor: active(e.path) ? "rgba(116, 155, 210, 0.4)" : "",
                    borderRadius: "5px",
                    py: 1,
                  }}
                  key={i}
                  component={Link}
                  to={e.path}
                >
                  <ListItemText primary={<Typography variant="h5">{e.title}</Typography>} />
                </ListItemButton>
              ) : null
            )}
          </List>
          <Divider sx={{ mt: 0.25, mb: 1.25 }} />
          <List
            subheader={
              <Typography variant="h4" display="block" gutterBottom>
                Management
              </Typography>
            }
          >
            {SidebarData.map((e, i) =>
              e.subtitle === "management" ? (
                <ListItemButton
                  sx={{
                    mb: 0.5,
                    backgroundColor: active(e.path) ? "rgba(116, 155, 210, 0.4)" : "",
                    borderRadius: "5px",
                    py: 1,
                  }}
                  key={i}
                  component={Link}
                  to={e.path}
                >
                  <ListItemText primary={<Typography variant="h5">{e.title}</Typography>} />
                </ListItemButton>
              ) : null
            )}
          </List>
          <Divider sx={{ mt: 0.25, mb: 1.25 }} />
        </Box>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
