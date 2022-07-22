import { Typography } from "@mui/material";
import React from "react";

const Message = ({ own }) => {
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
        <img
          src="https://via.placeholder.com/50"
          alt="avatar"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "10px",
          }}
        />
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
          <Typography fontSize={14}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </div>
      </div>
      <div className="timestamp">
        <Typography fontSize={12} style={{ marginTop: "10px", color: "gray" }}>
          1 hour ago
        </Typography>
      </div>
    </div>
  );
};

export default Message;
