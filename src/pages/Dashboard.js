import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import { UserContext } from "../components/UserContext";
import ProfileCard from "../components/ProfileCard/ProfileCard";

const url = "https://openmic-backend-api.herokuapp.com";

const testUser = {
  name: "Test User",
  desc: "This is a test user",
  contact: "test",
};

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
  const { user, setUser } = useContext(UserContext);
  let allUsers = [];
  const promise = getUsers();
  promise.then((data) => allUsers.push(...data));
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
          <h1>Dashboard</h1>
          <h2>Welcome, {JSON.parse(localStorage.getItem("user")).name}</h2>
          {JSON.stringify(allUsers)}
          {allUsers.map((user) => (
            <ProfileCard
              name={user.name}
              contact={user.contact}
              desc={user.desc}
            />
          ))}
          <ProfileCard
            name={testUser.name}
            contact={testUser.contact}
            desc={testUser.desc}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
