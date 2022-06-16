import React from "react";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { Box, Grid, Stack } from "@mui/material";
import UpdateForm from "../components/UpdateProfile/UpdateForm";

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
          <Stack direction="row">
            <Box
              style={{
                marginLeft: "5%",
                width: "90%",
                marginTop: "10%",
              }}
            >
              <ProfileCard />
            </Box>
            <Box
              style={{
                width: "100%",
                marginRight:"5%",
                marginTop: "5%",
              }}
            >
              <UpdateForm />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
