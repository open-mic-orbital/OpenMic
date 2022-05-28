import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";

const AboutUs = () => {
  return (
    <Box sx={{ flexGrow: 1, color: "white", overflow: "scroll" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ paddingBottom: "5vh" }}>
          <UnauthAppBar />
        </Grid>
      </Grid>
      <h1>About Us.</h1>
    </Box>
  );
};

export default AboutUs;
