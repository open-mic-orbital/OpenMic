import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const DiscoverButton = () => {
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
        <Link to="/Discover" style={{ textDecoration: "none" }}>
          <Button
            disableElevation
            color="secondary"
            variant="contained"
            sx={{
              width: isMobile ? 150 : 200,
              height: isMobile ? 60 : 80,
              backgroundColor: "#009c95",
              fontSize: isMobile ? "10pt" : "12pt",
            }}
          >
            Find out more
          </Button>
        </Link>
      </ThemeProvider>
    </>
  );
};

export default DiscoverButton;
