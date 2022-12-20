import {
  AccountBox,
  ChildFriendlySharp,
  Group,
  Home,
  MarkEmailReadTwoTone,
  ModeNight,
  Pages,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

import ModalCom from "./ModalCom";
import React from "react";

const Sidebar = ({ setMode, mode }) => {
  return (
    <Box sx={{ flex: { xs: 0.5, sm: 2 }, padding: { xs: 0, sm: 1, md: 2 } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText
                primary="HomePage"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Pages />
              </ListItemIcon>

              <ListItemText
                primary="Pages"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group />
              </ListItemIcon>

              <ListItemText
                primary="Groups"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MarkEmailReadTwoTone />
              </ListItemIcon>

              <ListItemText
                primary="MarketPlace"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChildFriendlySharp />
              </ListItemIcon>

              <ListItemText
                primary="Friends"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText
                primary="Setting"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>

              <ListItemText
                primary="Profile"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemIcon>
                <ModeNight
                  onClick={(e) => setMode(mode === "light" ? "dark" : "light")}
                />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <ModalCom />
      </Box>
    </Box>
  );
};

export default Sidebar;
