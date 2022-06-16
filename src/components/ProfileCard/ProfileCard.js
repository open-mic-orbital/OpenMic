import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";

const ProfileCard = () => {
  const myProfile = JSON.parse(localStorage.getItem("user"));

  return (
    <Card sx={{ maxWidth: 345, bgcolor: "#fff", borderRadius: "20px" }}>
      <CardActionArea disableRipple>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingTop="5vh"
          paddingBottom="5vh"
          style={{
            background: "linear-gradient(45deg, #009c95, #8ec7c3)",
          }}
        >
          <Box
            boxShadow={8}
            style={{
              borderRadius: "50%",
              height: "100px",
              width: "100px",
            }}
          >
            <CardMedia
              component="img"
              image={
                myProfile.image ||
                "https://cdn.costumewall.com/wp-content/uploads/2018/09/jon-arbuckle.jpg"
              }
              alt="green iguana"
              style={{
                borderRadius: "50%",
                height: "100px",
                width: "100px",
              }}
            />
          </Box>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h6" align="center" color="#009c95">
            {myProfile.name || "Jon Arbuckle"}
          </Typography>
          <Typography variant="body" align="center">
            {myProfile.desc || "Professional bass player available weekends."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          target="_blank"
          href= {"https://instagram.com/" + (myProfile.contact || "garfield")}
          size="small"
          style={{ marginLeft: "20%", width: "60%", color: "#f78104" }}
        >
          Contact
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
