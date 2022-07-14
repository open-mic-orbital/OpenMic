import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Card, Divider } from "@mui/material";
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import SocialNetwork from "../utils/images/SocialNetwork.png";
import Stage from "../utils/images/Stage.png";

const sampleUser = {
  name: "John Appleseed",
  contact: "johnappleseed",
  description: "Professional guitarist of 6 years in the Bay Area!",
};

const Discover = () => {
  const myProfile = JSON.parse(localStorage.getItem("user"));

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
      <Box
        sx={{
          flexGrow: 1,
          color: "white",
          overflow: "scroll",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {myProfile ? <AuthAppBar logo={true} /> : <UnauthAppBar />}
          </Grid>
        </Grid>
        <Box
          marginLeft={isMobile ? "5%" : "20%"}
          width={isMobile ? "90%" : "60%"}
          marginBottom="5%"
        >
          <Card
            sx={{
              bgcolor: "#009c95",
              borderRadius: "20px",
              marginTop: "5%",
            }}
          >
            <h2 style={{ color: "white" }}>Our Mission</h2>
            <Typography
              align="center"
              sx={{
                marginLeft: "6%",
                marginRight: "6%",
                marginBottom: "4%",
                color: "white",
              }}
            >
              To connect artists and venues for a smoother live entertainment
              planning experience.
            </Typography>
          </Card>
          <Card
            sx={{ bgcolor: "#009c95", borderRadius: "20px", marginTop: "5%" }}
          >
            <h2 style={{ color: "white" }}>Our Features</h2>
            <h3 style={{ color: "white" }}>Profile Customisation</h3>
            <Box
              display="flex"
              flexWrap="wrap"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <ProfileCard
                name={sampleUser.name}
                contact={sampleUser.contact}
                description={sampleUser.description}
              />
              <Typography color={"white"} sx={{ margin: "4%" }}>
                Customise your profile to attract your target audience!
              </Typography>
            </Box>
            <Divider color="#10182e" />
            <h3 style={{ color: "white" }}>Social Networking</h3>
            <img src={SocialNetwork} alt="Social Networking" width="60%" />
            <Typography color={"white"} sx={{ margin: "4%" }}>
              Connect with other venues to share your performances!
            </Typography>
            <Divider color="#10182e" />
            <h3 style={{ color: "white" }}>Talent Scouting</h3>
            <img src={Stage} alt="Talent Scouting" width="60%" />
            <Typography color={"white"} sx={{ margin: "4%" }}>
              Find artists to perform at your stage!
            </Typography>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Discover;
