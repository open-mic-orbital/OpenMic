import React, { useState } from "react";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { Box, Grid, Stack } from "@mui/material";
import UpdateForm from "../components/UpdateProfile/UpdateForm";

const Profile = () => {
  const myProfile = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(myProfile);
  return (
    <Box
      sx={{
        flexGrow: 1,
        color: "#000",
        overflow: "scroll",
        backgroundColor: "#fcfcfc",
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
                width: "100%",
                marginTop: "8%",
              }}
            >
              <ProfileCard
                name={user.name || user.userName}
                contact={user.contact}
                description={user.description}
                image={user.image}
              />
            </Box>
            <Box
              style={{
                width: "100%",
                marginRight: "5%",
                marginTop: "1%",
              }}
            >
              <UpdateForm props={{ user, setUser }} />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
