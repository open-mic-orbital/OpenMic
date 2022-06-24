import React, { useState, useEffect } from "react";
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";
import { Box, Card, Divider, Grid, Stack } from "@mui/material";
import OpenMicLogo from "../utils/images/OpenMicLogoBlack.png";
import PasswordRecoveryForm from "../components/Auth/PasswordRecoveryForm";

const AuthRecovery = () => {
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
          <h1>Password Reset</h1>
          <Card
            sx={{
              bgcolor: "#f9f9f9",
              color: "black",
              borderRadius: "20px",
            }}
          >
            {isMobile ? (
              <PasswordRecoveryForm />
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
                  <PasswordRecoveryForm />
                </Box>
              </Stack>
            )}
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default AuthRecovery;
