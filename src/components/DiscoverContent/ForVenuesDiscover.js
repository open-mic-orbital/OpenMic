import React, { useEffect, useState } from "react";
import { Divider, Stack, Typography } from "@mui/material";
import Stage from "../../utils/images/Stage.png";
import VenueCard from "../../utils/images/SampleProfileCardVenue.png";

const ForVenuesDiscover = () => {
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
      <Stack
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Stack
          direction={isMobile ? "column" : "row"}
          divider={
            <Divider
              orientation="vertical"
              color="gray"
              style={{ marginLeft: "10%" }}
              flexItem
            />
          }
          spacing={2}
          sx={{ alignItems: "center", paddingBottom: "7%" }}
        >
          <img src={VenueCard} alt="Venue Profile Card" width="40%" />
          <Typography>
            Customise your profile to attract your target audience!
          </Typography>
        </Stack>
        <Stack
          direction={isMobile ? "column" : "row"}
          divider={
            <Divider
              orientation="vertical"
              color="gray"
              style={{ marginLeft: "10%" }}
              flexItem
            />
          }
          spacing={2}
          sx={{ alignItems: "center" }}
        >
          <img src={Stage} alt="Stage" width="40%" />
          <Typography>Find artists to perform at your stage!</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default ForVenuesDiscover;
