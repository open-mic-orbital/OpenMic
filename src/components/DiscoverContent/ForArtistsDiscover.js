import React, { useEffect, useState } from "react";
import { Divider, Stack, Typography } from "@mui/material";
import SocialNetwork from "../../utils/images/SocialNetwork.png";
import ArtistCard from "../../utils/images/SampleProfileCardArtist.png";

const ForArtistsDiscover = () => {
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
          <img src={ArtistCard} alt="Artist Profile" width="40%" />
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
          <img src={SocialNetwork} alt="Social Networking" width="40%" />
          <Typography>
            Connect with other venues to share your performances!
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default ForArtistsDiscover;
