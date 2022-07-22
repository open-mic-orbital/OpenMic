import React, { useState, useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";

const ChatBoxHeader = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <Box
      sx={{
        backgroundColor: "#fcfcfc",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <Typography sx={{ padding: "2%", color: "#10182e" }}>Name</Typography>
      <Divider />
    </Box>
  );
};

export default ChatBoxHeader;
