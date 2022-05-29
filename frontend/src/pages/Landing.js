import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";
import MainText from "../components/MainText/MainText";
import Icons from "../utils/images/Icons.png";
import ForArtistsButton from "../components/ForEachButton/ForArtistsButton";
import ForVenuesButton from "../components/ForEachButton/ForVenuesButton";
import Stack from "@mui/material/Stack";

function Landing() {
  return (
    <Box sx={{ flexGrow: 1, color: "white", overflow: "scroll" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ paddingBottom: "5vh" }}>
          <UnauthAppBar />
        </Grid>
        <Grid item xs={6}>
          <MainText />
          <Stack direction="row" spacing={2} sx={{ paddingLeft: "15vh" }}>
            <ForArtistsButton />
            <ForVenuesButton />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <img src={Icons} className="Logo" alt="logo" />
        </Grid>
      </Grid>
    </Box>
  );
}
export default Landing;
