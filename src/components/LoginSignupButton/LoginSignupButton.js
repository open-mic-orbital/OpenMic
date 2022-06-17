import React from "react";
import { Button, Stack } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import { Link } from "react-router-dom";

const LoginSignupButton = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={2} sx={{ paddingRight: "5vh" }}>
          <Link
            to="/Auth"
            state={{ tabToDisplay: "login" }}
            style={{ textDecoration: "none" }}
          >
            <Button
              disableElevation
              variant="contained"
              size="large"
              sx={{ width: 100 }}
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
              size="large"
              sx={{ width: 100 }}
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
