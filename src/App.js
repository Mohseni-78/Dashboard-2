import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Feed from "./components/Feed";
import Navabr from "./components/Navabr";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [mode, setMode] = useState("light");

  const darkMode = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#1760a5",
        light: "skyblue",
      },
      secondary: {
        main: "#15c630",
      },
    },
    typography: {
      fontFamily: "Quicksand",
    },
  });

  return (
    <ThemeProvider theme={darkMode}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navabr />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
