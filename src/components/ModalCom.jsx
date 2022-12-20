import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  StickyNote2,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { bgcolor, Box, Stack } from "@mui/system";
import React, { useState } from "react";

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 10,
  marginBottom: 30,
});

const ModalCom = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Fab
        sx={{ bottom: "-100px" ,left:"10px"}}
        color="primary"
        size="medium"
        onClick={() => setOpen(true)}
      >
        <Add />
      </Fab>
      <Modal
        onClose={() => setOpen(false)}
        open={open}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          bgcolor={"background.default"}
          color="text.primary"
          p={2}
          sx={{
            textAlign: "center",
            width: "450px",
            height: "300px",
            borderRadius: 5,
          }}
        >
          <Typography color="gray">Create Post</Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} cariant="span">
              John
            </Typography>
          </UserBox>
          <Typography color="gray" variant="body2" textAlign="start" mb={2}>
            whats on your mind ?
          </Typography>
          <TextField variant="standard" fullWidth />
          <Stack direction="row" alignItems="center" mt={1} mb={5} gap={1}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup variant="contained" fullWidth>
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default ModalCom;
