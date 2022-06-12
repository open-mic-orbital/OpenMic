import React from "react";
import { Link } from "react-router-dom";
import { Button, Box, ListItem } from "@mui/material";
import logout from "../../utils/svg/logout.svg";

const LogoutButton = () => {
  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: "1.2rem",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          disableRipple
          sx={{
            padding: "0.5rem",
            backgroundColor: "#db3a37",
            borderRadius: 1,
            color: "#fff",
            justifyContent: "flex-start",
            px: 2,
            textAlign: "center",
            textTransform: "none",
            width: "25vh",
            "& .MuiButton-startIcon": {
              color: "#f78104",
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255, 0.08)",
              color: "#db3a37",
            },
          }}
        >
          <img
            fill="white"
            src={logout}
            alt="Logout Button"
            width={25}
            style={{ paddingRight: "2vh" }}
          />
          <Box sx={{ flexGrow: 1 }}>Logout</Box>
        </Button>
      </Link>
    </ListItem>
  );
};

export default LogoutButton;
