import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import nav from "../../utils/images/nav.jpg";

const NavCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="200" image={nav} alt="Nav" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Navaneeth
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dabbler of the bass and the back-end maestro, he keeps up with Kartik
          to keep things running.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          target="_blank"
          href="https://www.instagram.com/nobneeth/"
        >
          Instagram
        </Button>
        <Button
          size="small"
          target="_blank"
          href="https://www.linkedin.com/mwlite/in/navaneeth-ramapurath-47ba35216"
        >
          LinkedIn
        </Button>
      </CardActions>
    </Card>
  );
};

export default NavCard;
