import React, { useState, useEffect } from "react";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import PropTypes from "prop-types";
import ForArtistsDiscover from "../components/DiscoverContent/ForArtistsDiscover";
import ForVenuesDiscover from "../components/DiscoverContent/ForVenuesDiscover";
import { useLocation } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Discover = () => {
  const location = useLocation();
  const { tabToDisplay } = location.state || { tabToDisplay: "artists" };
  const current = tabToDisplay === "artists" ? 0 : 1;
  const [value, setValue] = React.useState(current);

  const myProfile = JSON.parse(localStorage.getItem("user"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    <>
      <Box sx={{ flexGrow: 1, color: "white", overflow: "scroll" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {myProfile ? <AuthAppBar logo={true} /> : <UnauthAppBar />}
          </Grid>
        </Grid>
        <Box
          sx={{
            margin: "2%",
            marginLeft: isMobile ? "10%" : "25%",
            marginRight: isMobile ? "10%" : "25%",
            bgcolor: "#009c95",
            borderRadius: "20px",
            border: "2px dashed #10182e",
          }}
        >
          <h2 style={{ color: "white" }}>Our Mission</h2>
          <Typography
            width="70%"
            align="center"
            sx={{
              paddingLeft: "15%",
              paddingBottom: "4%",
              color: "white",
            }}
          >
            To connect artists and venues for a smoother live entertainment
            planning experience.
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "2%",
            marginLeft: isMobile ? "10%" : "25%",
            marginRight: isMobile ? "10%" : "25%",
            bgcolor: "#f78104",
            borderRadius: "20px",
            border: "2px dashed #10182e",
          }}
        >
          <h2 style={{ color: "#10182e" }}>The Problem</h2>
          <Typography
            width="70%"
            align="justify"
            sx={{ paddingLeft: "15%", paddingBottom: "4%", color: "#10182e" }}
          >
            1. Currently, success in the live entertainment industry relies on
            personal networks. This makes it an uneven playing field for
            up-and-coming <b>artists</b>.
            <br />
            2. Due to the overreliance on connections in the gigging economy, it
            can be difficult for <b>venues</b> to find the right talent to
            complement their ambience.
            <br /> <br />
            We aim to fix <b>both</b> of these issues in one go.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{ borderBottom: 1, borderColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                },
              }}
              centered
            >
              <Tab
                style={{
                  color: "#f78104",
                  paddingLeft: "5vh",
                  paddingRight: "5vh",
                }}
                label="For Artists"
                {...a11yProps(0)}
                id="for-artists"
              />
              <Tab
                style={{
                  color: "#f78104",
                  paddingLeft: "5vh",
                  paddingRight: "5vh",
                }}
                label="For Venues"
                {...a11yProps(1)}
                id="for-venues"
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ForArtistsDiscover />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ForVenuesDiscover />
          </TabPanel>
        </Box>
      </Box>
    </>
  );
};

export default Discover;
