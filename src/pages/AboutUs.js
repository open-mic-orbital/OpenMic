import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import { Stack } from "@mui/material";
import KartikCard from "../components/AboutUsCards/KartikCard";
import NavCard from "../components/AboutUsCards/NavCard";

const AboutUs = () => {
  const myProfile = JSON.parse(localStorage.getItem("user"));

  return (
    <Box sx={{ flexGrow: 1, color: "white", overflow: "scroll" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {myProfile ? <AuthAppBar logo={true} /> : <UnauthAppBar />}
        </Grid>
      </Grid>
      <h1>About Us</h1>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
          <KartikCard />
          <NavCard />
      </Box>
    </Box>
  );
};

export default AboutUs;
