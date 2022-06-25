import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const promise = getUsers();
    promise.then((data) => setAllUsers((allUsers) => allUsers.concat(data)));
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
          <h1>Dashboard</h1>
          <h2>
            Welcome,{" "}
            {JSON.parse(localStorage.getItem("user")).name ||
              JSON.parse(localStorage.getItem("user")).userName}
            .
          </h2>
          <p>
            Get in touch with these other users looking to connect. Click on
            'Contact' when you notice an interesting profile!
          </p>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            marginTop="5vh"
          >
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
