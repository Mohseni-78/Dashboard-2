import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Popover,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Navabr = () => {
  const [open, setOpen] = useState(false);
  const ToolbarStyled = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icon = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  return (
    <AppBar position="sticky">
      <ToolbarStyled>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Lama Dev
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icon>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: "30px", height: "30px" }}
          />
        </Icon>
        <UserBox>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: "30px", height: "30px" }}
          />
          <Typography variant="h6">John sina</Typography>
        </UserBox>
      </ToolbarStyled>
      <Popover
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{ vertical: "0", horizontal: "right" }}
        transformOrigin={{
          vartical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Log out</MenuItem>
      </Popover>
    </AppBar>
  );
};

export default Navabr;
