import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";

const Dashboard = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        color: "white",
        overflow: "scroll",
        backgroundColor: "#fff",
        color: "#000",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AuthAppBar />
          <h1>Dashboard</h1>
          <DashboardSidebar />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
