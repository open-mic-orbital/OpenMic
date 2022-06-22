import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import openMicLogo from "../../utils/images/OpenMicLogo.png";
import "./UnauthAppBar.css";
import LoginSignupButton from "../LoginSignupButton/LoginSignupButton";
import { Link } from "react-router-dom";

const UnauthAppBar = () => {
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

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#009c95",
        paddingLeft: "12vh",
        paddingTop: "2vh",
        paddingBottom: "2vh",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img src={openMicLogo} className="Logo" height={50} alt="logo" />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                to="Discover"
              >
                <Typography textAlign="center">Discover</Typography>
              </MenuItem>
              <MenuItem
                key={"AboutUs"}
                onClick={handleCloseNavMenu}
                component={Link}
                to="AboutUs"
              >
                <Typography textAlign="center">About Us</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              href="Discover"
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
              href="AboutUs"
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
            <LoginSignupButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default UnauthAppBar;
