import React, { useState, useEffect } from "react";
import { Box, Grid, Stack } from "@mui/material";
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";
import MainText from "../components/MainText/MainText";
import Icons from "../utils/images/Icons.png";
import DiscoverButton from "../components/Discover/DiscoverButton";

function Landing() {
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
    <Box sx={{ flexGrow: 1, color: "white", overflow: "scroll" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ paddingBottom: "5vh" }}>
          <UnauthAppBar />
        </Grid>
        {isMobile ? (
          <Box>
            <img src={Icons} className="Logo" alt="logo" width="60%" />
          </Box>
        ) : (
          ""
        )}
        <Grid item xs={isMobile ? 12 : 6}>
          <MainText />
          <Stack
            direction="row"
            spacing={2}
            sx={{ paddingLeft: isMobile ? "5%" : "15%" }}
          >
            <DiscoverButton />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          {isMobile ? "" : <img src={Icons} className="Logo" alt="logo" />}
        </Grid>
      </Grid>
    </Box>
  );
}
export default Landing;
