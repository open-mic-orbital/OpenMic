import React, { useState, useEffect } from "react";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { Box, Grid, Alert } from "@mui/material";
import UpdateForm from "../components/UpdateProfile/UpdateForm";

const Profile = () => {
  const myProfile = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(myProfile);

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
    <Box
      sx={{
        flexGrow: 1,
        color: "#000",
        overflow: "scroll",
        backgroundColor: "#fcfcfc",
      }}
    >
      <Grid container>
        {isMobile ? (
          ""
        ) : (
          <Grid item xs={2} style={{ backgroundColor: "#10182e" }}>
            <DashboardSidebar />
          </Grid>
        )}
        <Grid item xs={isMobile ? 12 : 10}>
          <AuthAppBar />
          {!user.enabled ? (
            <Alert severity="error">
              You cannot access the 'Explore' page until your profile is
              completed. Please complete your profile with a valid <b>Display Name</b>,
              <b>Description</b> and <b>Instagram</b> username to continue.
            </Alert>
          ) : (
            ""
          )}
          <h1>Profile</h1>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <div>
              <ProfileCard
                name={user.name || user.userName}
                contact={user.contact}
                description={user.description}
                image={user.img}
              />
            </div>
            <div
              style={{
                width: "100%",
                marginTop: isMobile ? "4%" : "1%",
              }}
            >
              <UpdateForm props={{ user, setUser }} />
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
