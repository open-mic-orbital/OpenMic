import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import { UserContext } from "../components/UserContext";
import ProfileCard from "../components/ProfileCard/ProfileCard";

const url = "https://openmic-backend-api.herokuapp.com";

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
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const promise = getUsers();
    promise.then((data) => setAllUsers((allUsers) => allUsers.concat(data)));
    console.log(promise);
  }, []);
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
          <h2>
            Welcome,{" "}
            {JSON.parse(localStorage.getItem("user")).name ||
              JSON.parse(localStorage.getItem("user")).userName}
          </h2>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            marginTop="5vh"
          >
            {allUsers.map((user) => (
              <div style={{ marginBottom: "8vh", marginLeft: "8vh" }}>
                <ProfileCard
                  name={user.name || user.userName}
                  contact={user.contact}
                  desc={user.desc}
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
