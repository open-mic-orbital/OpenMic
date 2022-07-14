import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";
import openMicLogo from "../../utils/images/OpenMicLogo.png";
import { Link } from "react-router-dom";
import url from "../../utils/url";

const settings = ["Explore", "Profile", "Settings"];

const postLogout = async () => {
  const response = await fetch(url + "/users/logout", {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  return response;
};

const logoutAndClear = async () => {
  postLogout()
    .then(() => {
      window.localStorage.clear();
      alert("Logout success");
      window.location.reload();
    })
    .catch((e) => {
      alert("Logout failed! Please try again later...");
    });
};

const AuthAppBar = (props) => {
  const myProfile = JSON.parse(localStorage.getItem("user"));
  const displayLogo = props.logo || false;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#009c95",
        paddingLeft: "6%",
        paddingTop: "1%",
        paddingBottom: "1%",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {displayLogo && (
            <Link to="/Explore">
              <img
                src={openMicLogo}
                className="Logo"
                height={isMobile ? 30 : 50}
                alt="logo"
              />
            </Link>
          )}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <Link to="/Explore">
              <img
                src={openMicLogo}
                className="Logo"
                height={30}
                alt="logo"
              />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, paddingRight: isMobile ? "3vh" : "5vh" }}
              >
                <Avatar
                  alt={myProfile.name}
                  src={myProfile.img|| "/static/images/avatar/2.jpg"}
                  sx={{ width: isMobile ? 30 : 50, height: isMobile ? 30 : 50 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  component={Link}
                  to={"/" + setting}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem
                key="logout"
                onClick={logoutAndClear}
                component={Link}
                to="/"
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AuthAppBar;
