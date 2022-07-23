import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const ChatBoxHeader = ({ name }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fcfcfc",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <Typography sx={{ padding: "2%", color: "#10182e" }}>{name}</Typography>
      <Divider />
    </Box>
  );
};

export default ChatBoxHeader;
