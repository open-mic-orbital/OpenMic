import { Typography } from "@mui/material";
import React from "react";
import { format } from "timeago.js";

const Message = ({ message, own }) => {
  const myProfile = JSON.parse(localStorage.getItem("user"));
  return (
    <div
      className="message"
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        alignItems: own ? "flex-end" : "flex-start",
      }}
    >
      <div className="top" style={{ display: "flex" }}>
        {own ? <img
          src={myProfile ? "data:image/*;base64," + myProfile.img : "https://via.placeholder.com/50"}
          alt="avatar"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "10px",
          }}
        /> : ""}
        <div
          className="bubble"
          style={{
            padding: "14px",
            borderRadius: "20px",
            backgroundColor: !own ? "lightgray" : "#009c95",
            color: !own ? "black" : "white",
            textAlign: "left",
            maxWidth: "300px",
          }}
        >
          <Typography fontSize={14}>{message.text}</Typography>
        </div>
      </div>
      <div className="timestamp">
        <Typography fontSize={12} style={{ marginTop: "10px", color: "gray" }}>
          {format(message.createdAt)}
        </Typography>
      </div>
    </div>
  );
};

export default Message;
