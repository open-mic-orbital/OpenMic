import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";

const ForArtistsButton = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          disableElevation
          color="secondary"
          variant="contained"
          size="large"
          sx={{ width: 200, height: 80 }}
        >
          For Artists
        </Button>
      </ThemeProvider>
    </>
  );
};

export default ForArtistsButton;
