"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <h1 className="text-xl px-4 pt-4 font-bold">LOGO.</h1>
      <List>
        {["HOME", "BRANDS", "TOYS", "GIRLS"].map((text) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              ":hover": {
                bgcolor: "#A800E7",
                color: "white",
              },
            }}
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Contact", "About", "Privacy Policy"].map((text) => (
          <ListItem
            sx={{
              ":hover": {
                bgcolor: "#A800E7",
                color: "white",
              },
            }}
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav className="md:hidden h-full flex justify-center items-center">
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{ color: "white", marginLeft: "10px" }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </nav>
  );
}
