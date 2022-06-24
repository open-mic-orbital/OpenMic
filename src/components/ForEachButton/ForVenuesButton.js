import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import { Link } from "react-router-dom";

const ForArtistsButton = () => {
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
        <Link
          to="/Discover"
          state={{ tabToDisplay: "venues" }}
          style={{ textDecoration: "none" }}
        >
          <Button
            disableElevation
            color="secondary"
            variant="contained"
            sx={{
              width: isMobile ? 150 : 200,
              height: isMobile ? 60 : 80,
              backgroundColor: "#009c95",
            }}
          >
            For Venues
          </Button>
        </Link>
      </ThemeProvider>
    </>
  );
};

export default ForArtistsButton;
