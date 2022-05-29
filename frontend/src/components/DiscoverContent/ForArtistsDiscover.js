import React from "react";
import { Divider, Stack, Typography } from "@mui/material";
import SocialNetwork from "../../utils/images/SocialNetwork.png";

const ForArtistsDiscover = () => {
  return (
    <>
      <Stack
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          sx={{ alignItems: "center", paddingBottom: "7vh" }}
        >
          <img src={SocialNetwork} alt="Social Networking" />
          <Typography>
            Connect with other artists to share your performances!
          </Typography>
        </Stack>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          sx={{ alignItems: "center" }}
        >
          <Typography>
            Connect with other artists to share your performances!
          </Typography>
          <img src={SocialNetwork} alt="Social Networking" />
        </Stack>
      </Stack>
    </>
  );
};

export default ForArtistsDiscover;
