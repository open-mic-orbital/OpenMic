import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";

const LoginSignupButton = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ButtonGroup
          disableElevation
          color="primary"
          variant="contained"
          size="large"
          sx={{ paddingRight: "5vh" }}
        >
          <Button sx={{ width: 100 }}>Login</Button>
          <Button sx={{ width: 100 }}>Signup</Button>
        </ButtonGroup>
      </ThemeProvider>
    </>
  );
};

export default LoginSignupButton;
