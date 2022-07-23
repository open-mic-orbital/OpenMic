import React, { useState, useEffect } from "react";
import { Button, Divider, Typography } from "@mui/material";
import url from "../../utils/url";

const searchUser = async (id) => {
  const response = await fetch(url + "/users/getProfile", {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: id,
    }),
  });
  const data = await response.json();
  return data;
};

const Conversation = (props) => {
  const otherUserId = props.convo[0];
  const [otherUser, setOtherUser] = useState(null);
  const [name, setName] = useState("Loading...");
  const [img, setImg] = useState("https://via.placeholder.com/32")
  searchUser(otherUserId).then((data) => {
    setOtherUser(data);
    setName(data[0].name);
    setImg("data:image/*;base64," + data[0].img);
  });
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
          src={img}
          alt={"Avatar"}
          style={{
            marginRight: isMobile ? "7%" : "5%",
            borderRadius: "50%",
            objectFit: "cover",
            height: "32px",
            width: "32px",
          }}
        />
        <Typography fontSize={12} sx={{ flexGrow: 1 }}>
          {name.length < (isMobile ? 6 : 12)
            ? name
            : name.substring(0, isMobile ? 6 : 12) + "..."}
        </Typography>
      </Button>
      <Divider sx={{ marginTop: "2%", marginBottom: "2%" }} />
    </div>
  );
};

export default Conversation;
