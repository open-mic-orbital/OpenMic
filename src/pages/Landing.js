import React, { useState, useEffect } from "react";
import { Box, Grid, Stack } from "@mui/material";
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import MainText from "../components/MainText/MainText";
import Icons from "../utils/images/Icons.png";
import ForArtistsButton from "../components/ForEachButton/ForArtistsButton";
import ForVenuesButton from "../components/ForEachButton/ForVenuesButton";

function Landing() {
  const myProfile = JSON.parse(localStorage.getItem("user"));

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
          {myProfile ? <AuthAppBar logo={true} /> : <UnauthAppBar />}
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
            <ForArtistsButton />
            <ForVenuesButton />
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
