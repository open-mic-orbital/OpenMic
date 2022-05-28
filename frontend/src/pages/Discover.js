import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";
import ArtistAccordion from "../components/Accordions/ArtistAccordion";
import VenueAccordion from "../components/Accordions/VenueAccordion";

const Discover = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, color: "white", overflow: "scroll" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <UnauthAppBar />
          </Grid>
        </Grid>
        <h1>Discover</h1>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ paddingBottom: "2vh" }}
        >
          <ArtistAccordion />
        </Box>
        <Box display="flex" justifyContent="center">
          <VenueAccordion />
        </Box>
      </Box>
    </>
  );
};

export default Discover;
