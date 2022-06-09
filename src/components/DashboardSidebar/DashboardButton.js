import React from "react";
import { Box, Button, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

const DashboardButton = (props) => {
  const { href, imgsrc, title } = props;

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
    >
      <Link to={href} style={{ textDecoration: "none" }}>
        <Button
          fullWidth
          disableRipple
          sx={{
            padding: "1vh",
            backgroundColor:
              window.location.pathname === href
                ? "rgba(255,255,255,0.08)"
                : "#10182e",
            borderRadius: 1,
            color:
              window.location.pathname === href
                ? "#009c95"
                : "rgba(255,255,255, 0.5)",
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
              color:
                window.location.pathname === href
                  ? "#009c95"
                  : "#fff",
            },
          }}
        >
          <img
            src={imgsrc}
            alt={title}
            width={20}
            style={{ paddingRight: "2vh" }}
          />
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Button>
      </Link>
    </ListItem>
  );
};

export default DashboardButton;
