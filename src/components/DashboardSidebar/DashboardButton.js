import React from "react";
import { Box, Button } from "@mui/material";

const DashboardButton = (props) => {
  const { href, imgsrc, title } = props;

  return (
    <Button
      href={href}
      disableRipple
      sx={{
        backgroundColor: "#10182e",
        borderRadius: 1,
        color: "rgba(255,255,255, 0.5)",
        justifyContent: "flex-start",
        px: 3,
        textAlign: "left",
        textTransform: "none",
        width: "100%",
        "& .MuiButton-startIcon": {
          color: "#f78104",
        },
        "&:hover": {
          backgroundColor: "rgba(255,255,255, 0.08)",
          color: "#fff"
        },
      }}
    >
      <img src={imgsrc} alt={title} width={40} />
      {title}
    </Button>
  );
};

export default DashboardButton;
