import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import openMicLogo from "../../utils/images/OpenMicLogo.png";
import { Link } from "react-router-dom";
import url from "../../utils/url";

const settings = ["Dashboard", "Profile", "Settings"];

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
    })
    .catch((e) => {
      alert("Logout failed! Please try again later...");
    });
};

const AuthAppBar = (props) => {
  const myProfile = JSON.parse(localStorage.getItem("user"));
  const [displayLogo, setDisplayLogo] = React.useState(props.logo || false);

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
        paddingLeft: "5vh",
        paddingTop: "2vh",
        paddingBottom: "2vh",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {displayLogo && (
            <Link to="/">
              <img src={openMicLogo} className="Logo" height={50} alt="logo" />
            </Link>
          )}

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
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, paddingRight: "5vh" }}
              >
                <Avatar
                  alt={myProfile.name}
                  src={myProfile.image || "/static/images/avatar/2.jpg"}
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
