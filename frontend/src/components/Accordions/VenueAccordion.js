import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/material";
import SocialNetwork from "../../utils/images/SocialNetwork.png";
import { Divider } from "@mui/material";

const VenueAccordion = () => {
  return (
    <Accordion
      sx={{
        backgroundColor: "#009c95",
        color: "white",
        width: "50%",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ justifyContent: "center" }}
      >
        <Typography>For Venues</Typography>
      </AccordionSummary>
      <AccordionDetails>
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
      </AccordionDetails>
    </Accordion>
  );
};

export default VenueAccordion;
