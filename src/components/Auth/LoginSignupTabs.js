import React from "react";
import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

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
          <Typography component="span">{children}</Typography>
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

const LoginSignupTabs = (props) => {
  const [value, setValue] = React.useState(props.current);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Stack direction="column" flex="nowrap">
        <Box
          sx={{
            width: "100%",
            borderBottom: 1,
            borderColor: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#f78104",
              },
            }}
            centered
          >
            <Tab
              style={{
                color: "#f78104",
                marginLeft: "5%",
                marginRight: "2%",
              }}
              label="Signup"
              {...a11yProps(0)}
              id="signup"
            />
            <Tab
              style={{
                color: "#f78104",
                marginLeft: "2%",
                marginRight: "5%",
              }}
              label="Login"
              {...a11yProps(1)}
              id="login"
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SignupForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LoginForm />
        </TabPanel>
      </Stack>
    </>
  );
};

export default LoginSignupTabs;
