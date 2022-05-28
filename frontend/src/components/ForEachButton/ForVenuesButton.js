import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";

const ForArtistsButton = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          href="Discover"
          disableElevation
          color="secondary"
          variant="contained"
          sx={{ width: 200, height: 80 }}
        >
          For Venues
        </Button>
      </ThemeProvider>
    </>
  );
};

export default ForArtistsButton;
