import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import kartik from "../../utils/images/kartik.jpg";

const KartikCard = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: "2%" }}>
      <CardMedia component="img" height="200" image={kartik} alt="Kartik" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kartik
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Front-end aficionado and design wizard, he stays beautiful so that our
          website stays beautiful.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          target="_blank"
          href="https://www.instagram.com/kvrtikeya/"
        >
          Instagram
        </Button>
        <Button
          size="small"
          target="_blank"
          href="https://www.linkedin.com/in/kvrtikeya"
        >
          LinkedIn
        </Button>
      </CardActions>
    </Card>
  );
};

export default KartikCard;
