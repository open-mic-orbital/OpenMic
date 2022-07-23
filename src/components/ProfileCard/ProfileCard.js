import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import url from "../../utils/url";

const ProfileCard = (props) => {
  const myProfile = JSON.parse(localStorage.getItem("user"));

  const handleCreateChat = async () => {
    const response = await fetch(url + "/conversations/", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        senderId: myProfile._id,
        receiverId: props.id,
      }),
    });
    const data = await response.json();
    alert("Chat created, head over to your chats to start chatting!");
    return data;
  };

  return (
    <Card
      sx={{
        minWidth: 325,
        maxWidth: 325,
        bgcolor: "#fff",
        borderRadius: "20px",
      }}
    >
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
                props.image
                  ? "data:image/*;base64," + props.image
                  : "https://cdn.costumewall.com/wp-content/uploads/2018/09/jon-arbuckle.jpg"
              }
              alt="Upload Image"
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
            {props.name || "Jon Arbuckle"}
          </Typography>
          <Typography variant="body" align="center">
            {props.description || "No description provided."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {window.location.pathname !== "/Profile" ? (
          <Button
            target="_blank"
            onClick={handleCreateChat}
            size="small"
            style={{ marginLeft: "0%", width: "50%", color: "#f78104" }}
          >
            Create Chat
          </Button>
        ) : (
          ""
        )}
        <Button
          target="_blank"
          href={"https://instagram.com/" + (props.contact || "garfield")}
          size="small"
          style={{
            marginLeft: "0%",
            width: window.location.pathname === "/Profile" ? "100%" : "50%",
            color: "#f78104",
          }}
        >
          Instagram
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
