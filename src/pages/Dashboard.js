import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import { UserContext } from "../components/UserContext";

const url = 'https://openmic-backend-api.herokuapp.com';

const getUsers = async () => {
  const response = await fetch(url + '/users/readAll', {
    method: 'GET',
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  });
  const data = await response.json();
  return data;
}

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const allUsers = getUsers();
  console.log(allUsers);
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
