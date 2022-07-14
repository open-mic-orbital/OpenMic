import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import openMicLogo from "../../utils/images/OpenMicLogo.png";
import "./UnauthAppBar.css";
import LoginSignupButton from "../LoginSignupButton/LoginSignupButton";
import { Link } from "react-router-dom";

const UnauthAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
          <Link to="/">
            <img
              src={openMicLogo}
              className="Logo"
              height={isMobile ? 30 : 50}
              alt="logo"
            />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ marginLeft: "10%" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                key={"Discover"}
                onClick={handleCloseNavMenu}
                component={Link}
                to="/Discover"
              >
                <Typography textAlign="center">Discover</Typography>
              </MenuItem>
              <MenuItem
                key={"AboutUs"}
                onClick={handleCloseNavMenu}
                component={Link}
                to="/AboutUs"
              >
                <Typography textAlign="center">About Us</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              href="/Discover"
              onClick={handleCloseNavMenu}
              sx={{
                marginLeft: "4vh",
                my: 2,
                color: "white",
                display: "block",
                marginRight: "4vh",
              }}
            >
              Discover
            </Button>
            <Button
              href="/AboutUs"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
              }}
            >
              About Us
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {window.location.pathname === "/Auth" ? "" : <LoginSignupButton />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default UnauthAppBar;
