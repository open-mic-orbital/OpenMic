import React from "react";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { Box, Grid } from "@mui/material";

const Profile = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        color: "#000",
        overflow: "scroll",
        backgroundColor: "#fff",
      }}
    >
      <Grid container>
        <Grid item xs={2} style={{ backgroundColor: "#10182e" }}>
          <DashboardSidebar />
        </Grid>
        <Grid item xs={10}>
          <AuthAppBar />
          <h1>Profile</h1>
          <Box
            style={{
              marginLeft: "5%",
              width: "90%",
              marginTop: "10%",
            }}
          >
            <ProfileCard />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
