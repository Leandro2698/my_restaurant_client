import { useState, useRef, useContext } from "react";
import { Logout, Settings } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Chip,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";

function ProfileHeader() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const { logout, user } = useContext<any>(AuthContext);
  const anchorRef = useRef(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Chip
        sx={{
          height: "48px",
          alignItems: "center",
          borderRadius: "27px",
          transition: "all .2s ease-in-out",
          borderColor: theme.palette.background.default,
          backgroundColor: theme.palette.background.default,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            "& svg": {
              stroke: theme.palette.primary.light,
            },
          },
          "& .MuiChip-label": {
            lineHeight: 0,
          },
        }}
        icon={
          <Avatar
            sx={{
              width: "34px",
              height: "34px",
              fontSize: "1.2rem",
              margin: "8px 8px 8px 8px !important",
              cursor: "pointer",
            }}
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
          />
        }
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="primary"
        aria-describedby={id}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Typography variant="h6">Good Morning,</Typography>
              <Typography component="span" variant="h6" sx={{ fontWeight: 400 }}>
                {user ? user.firstname : ""}
              </Typography>
            </Stack>
          </Stack>
          <Divider />
        </Box>
        <Box sx={{ p: 2 }}>
          <List
            component="nav"
            sx={{
              width: "100%",
              maxWidth: 350,
              minWidth: 300,
              backgroundColor: theme.palette.background.paper,
              borderRadius: "10px",
              [theme.breakpoints.down("md")]: {
                minWidth: "100%",
              },
              "& .MuiListItemButton-root": {
                mt: 0.5,
              },
            }}
          >
            <ListItemButton sx={{ borderRadius: "4px" }}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary={<Typography variant="body2">Account Settings</Typography>} />
            </ListItemButton>
            <ListItemButton sx={{ borderRadius: "4px" }} onClick={logout} component={Link} to="/login">
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
            </ListItemButton>
          </List>
        </Box>
      </Popover>
    </>
  );
}

export default ProfileHeader;
