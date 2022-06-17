import React, { useState, useEffect } from "react";
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";
import { Box, Card, Divider, Grid, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import LoginSignupTabs from "../components/Auth/LoginSignupTabs";
import OpenMicLogo from "../utils/images/OpenMicLogoBlack.png";

const Auth = () => {
  const location = useLocation();
  const { tabToDisplay } = location.state || { tabToDisplay: "signup" };
  const current = tabToDisplay === "signup" ? 0 : 1;

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
            <UnauthAppBar />
          </Grid>
        </Grid>
        <Box style={{ marginTop: "5%", margin: "5%" }}>
          <h1>Welcome to OpenMic!</h1>
          <Card
            sx={{
              bgcolor: "#f9f9f9",
              color: "black",
              borderRadius: "20px",
            }}
          >
            {isMobile ? (
              <LoginSignupTabs current={current} />
            ) : (
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                sx={{ alignItems: "center", margin: "1%" }}
              >
                <Box width="40%">
                  <img src={OpenMicLogo} alt="Open Mic Logo" width="60%" />
                </Box>
                <Box width="60%">
                  <LoginSignupTabs current={current} />
                </Box>
              </Stack>
            )}
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Auth;
