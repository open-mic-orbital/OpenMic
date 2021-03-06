import React from "react";
import { Link } from "react-router-dom";
import { Button, Box, ListItem } from "@mui/material";
import logout from "../../utils/svg/logout.svg";
import url from "../../utils/url";

const LogoutButton = () => {
  const postLogout = async () => {
    const response = await fetch(url + '/users/logout', {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response;
  }
  
  const logoutAndClear = async () => {
    postLogout()
      .then(() => {
        window.localStorage.clear();
        alert("Logout success");
        window.location.reload();
      }).catch((e) => {
        alert("Logout failed! Please try again later...");
        window.location.reload();
      });
  }

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
          onClick={logoutAndClear}
          sx={{
            padding: "0.5rem",
            backgroundColor: "#db3a37",
            borderRadius: 1,
            color: "#fff",
            justifyContent: "flex-start",
            px: 2,
            textAlign: "center",
            textTransform: "none",
            width: "100%",
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
            width={"12%"}
            style={{ marginRight: "5%" }}
          />
          <Box sx={{ flexGrow: 1 }}>Logout</Box>
        </Button>
      </Link>
    </ListItem>
  );
};

export default LogoutButton;
