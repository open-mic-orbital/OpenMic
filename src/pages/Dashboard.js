import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import url from "../utils/url";

const getUsers = async () => {
  const response = await fetch(url + "/users/viewProfiles", {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  const data = await response.json();
  return data;
};

const Dashboard = () => {
  const myProfile = JSON.parse(localStorage.getItem("user"));
  if (!myProfile.enabled) {
    window.location.href = "/Profile";
  }

  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promise = getUsers();
    promise
      .then((data) => setAllUsers((allUsers) => allUsers.concat(data)))
      .then(() => setLoading(false));
  }, []);

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
        backgroundColor: "#fff",
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
          <h1>Explore</h1>
          <h2>
            Welcome,{" "}
            {JSON.parse(localStorage.getItem("user")).name ||
              JSON.parse(localStorage.getItem("user")).userName}
            .
          </h2>
          <p>
            Get in touch with these other users looking to connect. Click on
            'Create Chat' when you notice an interesting profile!
          </p>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            marginTop="5vh"
          >
            {loading ? <CircularProgress size={30} /> : ""}
            {allUsers.map((user) => (
              <div
                style={{
                  marginBottom: "4%",
                  marginLeft: "4%",
                  marginRight: "4%",
                }}
              >
                <ProfileCard
                  name={user.name || user.userName}
                  contact={user.contact}
                  description={user.description}
                  image={user.img}
                  id={user._id}
                />
              </div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
