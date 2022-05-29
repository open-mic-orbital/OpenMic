import React from "react";
import { Divider, Stack, Typography } from "@mui/material";
import Stage from "../../utils/images/Stage.png";

const ForVenuesDiscover = () => {
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
          <img src={Stage} alt="Stage" />
          <Typography>Find artists to perform at your stage!</Typography>
        </Stack>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          sx={{ alignItems: "center" }}
        >
          <Typography>Find artists to perform at your stage!</Typography>
          <img src={Stage} alt="Stage" />
        </Stack>
      </Stack>
    </>
  );
};

export default ForVenuesDiscover;
