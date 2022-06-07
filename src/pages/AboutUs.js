import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";
import { Stack } from "@mui/material";
import KartikCard from "../components/AboutUsCards/KartikCard";
import NavCard from "../components/AboutUsCards/NavCard";

const AboutUs = () => {
  return (
    <Box sx={{ flexGrow: 1, color: "white", overflow: "scroll" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <UnauthAppBar />
        </Grid>
      </Grid>
      <h1>About Us</h1>
      <Box display="flex" justifyContent="center">
        <Stack direction="row" spacing={2}>
          <KartikCard />
          <NavCard />
        </Stack>
      </Box>
    </Box>
  );
};

export default AboutUs;
