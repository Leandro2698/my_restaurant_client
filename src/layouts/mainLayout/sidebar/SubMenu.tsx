/* eslint-disable react/no-array-index-key */
import { ChevronRight, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SubMenuProps } from "../types";

export default function SubMenu(props: SubMenuProps) {
  const { items } = props;
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const handleClickCollapse = () => {
    setOpen(!open);
  };
  function active(e: string) {
    if (location.pathname === `${e}`) {
      return true;
    }
    return false;
  }
  return items.subnav ? (
    <>
      <ListItemButton
        sx={{
          mb: 0.5,
          backgroundColor: "transparent !important",
          borderRadius: "5px",
          py: 1,
        }}
        onClick={handleClickCollapse}
      >
        <ListItemText primary={<Typography variant="h5">{items.title}</Typography>} />

        {open ? <ExpandMore /> : <ChevronRight />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.subnav.map((e: any, i: number) => (
            <ListItemButton
              component={Link}
              to={e.path}
              sx={{ pl: 4, backgroundColor: active(e.path) ? "rgba(116, 155, 210, 0.4)" : "", borderRadius: "5px" }}
              key={i}
            >
              <ListItemText primary={e.title} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  ) : null;
}
