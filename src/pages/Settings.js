import React from "react";
import { Box, Grid } from "@mui/material";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";

const Settings = () => {
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
          <h1>Settings</h1>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
