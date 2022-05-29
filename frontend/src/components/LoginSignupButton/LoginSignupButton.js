import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";

const LoginSignupButton = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={2} sx={{ paddingRight: "5vh" }}>
          <Button
            disableElevation
            variant="contained"
            href="Login"
            size="large"
            sx={{ width: 100 }}
          >
            Login
          </Button>
          <Button
            disableElevation
            variant="contained"
            href="Signup"
            size="large"
            sx={{ width: 100 }}
          >
            Signup
          </Button>
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default LoginSignupButton;
