import React from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";
import kartik from "../utils/images/kartik.jpg";
import nav from "../utils/images/nav.jpg";

const AboutUs = () => {
  return (
    <Box sx={{ flexGrow: 1, color: "white", overflow: "scroll" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ paddingBottom: "5vh" }}>
          <UnauthAppBar />
        </Grid>
      </Grid>
      <h1>About Us.</h1>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345}}>
            <CardMedia
              component="img"
              height="140"
              image={kartik}
              alt="Kartik"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kartik
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Front-end aficionado and design wizard, he stays beautiful so that our website stays beautiful.
              </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Socials</Button>
                <Button size="small">Contact</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345}}>
            <CardMedia
              component="img"
              height="140"
              image={nav}
              alt="Nav"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Navaneeth
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dabbler of the bass and learner of web development, he keeps up with Kartik to keep things running.
              </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Socials</Button>
                <Button size="small">Contact</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
