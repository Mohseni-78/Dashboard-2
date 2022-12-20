import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  List,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "./Image";
import Conversation from "./Conversation";

const Rightbar = () => {
  return (
    <Box flex={4} p={2} sx={{ display: { xs: "none", sm: "block" }}}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" />
          <Avatar alt="Remy Sharp" />
          <Avatar alt="Travis Howard" />
          <Avatar alt="Travis Howard" />
          <Avatar alt="Cindy Baker" />
          <Avatar alt="Cindy Baker" />
          <Avatar alt="Agnes Walker" />
          <Avatar alt="Agnes Walker" />
          <Avatar alt="Trevor Henderson" />
          <Avatar alt="Trevor Henderson" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} my={1}>
          Latest Photos
        </Typography>
        <ImageList
          sx={{ width: 400, height: 100 }}
          gap={5}
          rowHeight={200}
          cols={3}
        >
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </ImageList>
        <Typography variant="h6" fontWeight={100} my={1}>
          Latest Conversations
        </Typography>
        <List>
          <Conversation />
          <Conversation />
          <Conversation />
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
