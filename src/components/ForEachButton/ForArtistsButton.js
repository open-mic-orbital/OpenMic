import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import { Link } from "react-router-dom";

const ForArtistsButton = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Link
          to="/Discover"
          state={{ tabToDisplay: "artists" }}
          style={{ textDecoration: "none" }}
        >
          <Button
            disableElevation
            color="secondary"
            variant="contained"
            size="large"
            sx={{ width: 200, height: 80 }}
          >
            For Artists
          </Button>
        </Link>
      </ThemeProvider>
    </>
  );
};

export default ForArtistsButton;
