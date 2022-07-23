import React, { useState, useEffect } from "react";
import { Button, Divider, Typography } from "@mui/material";

const Conversation = (props) => {
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
    <div className="conversationbutton">
      <Button
        sx={{
          height: 50,
          width: "100%",
          color: "#10182e",
          textAlign: "left",
          justifyContent: "flex-start",
          textTransform: "none",
          backgroundColor: "#fcfcfc",
          borderRadius: 2,
        }}
      >
        <img
          src={
            props.user.img
              ? "data:image/*;base64," + props.user.img
              : "https://via.placeholder.com/32"
          }
          alt={props.user.name}
          style={{
            marginRight: isMobile ? "7%" : "5%",
            borderRadius: "50%",
            objectFit: "cover",
            height: "32px",
            width: "32px",
          }}
        />
        <Typography fontSize={12} sx={{ flexGrow: 1 }}>
          {props.user.name.length < (isMobile ? 6 : 12)
            ? props.user.name
            : props.user.name.substring(0, isMobile ? 6 : 12) + "..."}
        </Typography>
      </Button>
      <Divider sx={{ marginTop: "2%", marginBottom: "2%" }} />
    </div>
  );
};

export default Conversation;
