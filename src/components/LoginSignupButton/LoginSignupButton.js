import React, { useState, useEffect } from "react";
import { Button, Stack } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import { Link } from "react-router-dom";

const LoginSignupButton = () => {
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
    <>
      <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={2} sx={{ paddingRight: isMobile ? "1vh" : "5vh" }}>
          <Link
            to="/Auth"
            state={{ tabToDisplay: "login" }}
            style={{ textDecoration: "none" }}
          >
            <Button
              disableElevation
              variant="contained"
              size={isMobile ? "small" : "large"}
              sx={{ width: isMobile ? 70 : 100 }}
            >
              Login
            </Button>
          </Link>
          <Link
            to="/Auth"
            state={{ tabToDisplay: "signup" }}
            style={{ textDecoration: "none" }}
          >
            <Button
              disableElevation
              variant="contained"
              size={isMobile ? "small" : "large"}
              sx={{ width: isMobile ? 70 : 100 }}
            >
              Signup
            </Button>
          </Link>
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default LoginSignupButton;
