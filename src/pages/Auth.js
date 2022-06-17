import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";
import { Tab, Tabs, Typography } from "@mui/material";
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

const Auth = () => {
  const location = useLocation();
  const { tabToDisplay } = location.state || { tabToDisplay: "artists" };
  const current = tabToDisplay === "artists" ? 0 : 1;
  const [value, setValue] = React.useState(current);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, color: "white", overflow: "scroll" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <UnauthAppBar />
          </Grid>
        </Grid>
        <h1>Auth</h1>
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

export default Auth;
