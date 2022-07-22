import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Divider,
  CircularProgress,
  TextareaAutosize,
} from "@mui/material";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import Conversation from "../components/Chat/Conversation";
import ChatBoxHeader from "../components/Chat/ChatBoxHeader";
import Message from "../components/Chat/Message";
import url from "../utils/url";

const getUsers = async () => {
  const response = await fetch(url + "/users/viewProfiles", {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  const data = await response.json();
  return data;
};

const Chat = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promise = getUsers();
    promise
      .then((data) => setAllUsers((allUsers) => allUsers.concat(data)))
      .then(() => setLoading(false));
  }, []);

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
    <Box
      sx={{
        flexGrow: 1,
        color: "#000",
        overflow: "scroll",
        backgroundColor: "#fff",
      }}
    >
      <Grid container>
        {isMobile ? (
          ""
        ) : (
          <Grid item xs={2} style={{ backgroundColor: "#10182e" }}>
            <DashboardSidebar />
          </Grid>
        )}
        <Grid item xs={isMobile ? 12 : 10}>
          <AuthAppBar />
          <div classname="chat" style={{ display: "flex" }}>
            <div classname="userlist" style={{ flex: 2 }}>
              <div
                classname="userlistWrapper"
                style={{
                  padding: "10px",
                  backgroundColor: "#fcfcfc",
                  height: "100vh",
                  overflowX: "scroll",
                  whiteSpace: "nowrap",
                }}
              >
                {loading ? <CircularProgress size={20} /> : ""}
                {allUsers.map((user) => (
                  <Conversation user={user} />
                ))}
              </div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div classname="chatbox" style={{ flex: 7 }}>
              <ChatBoxHeader />
              <div
                classname="chatboxWrapper"
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingBottom: "10px",
                  backgroundColor: "#fcfcfc",
                }}
              >
                <div
                  className="messages"
                  style={{ height: "calc(100vh - 60px)", overflowX: "scroll" }}
                >
                  <Message />
                  <Message own={true} />
                  <Message />
                  <Message own={true} />
                  <Message />
                  <Message own={true} />
                  <Message />
                </div>
                <div
                  className="chatBoxBottom"
                  style={{
                    marginTop: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <TextareaAutosize
                    type="text"
                    placeholder="Type a message..."
                    style={{ height: "60px", width: "80%", padding: "10px" }}
                  />
                  <Button
                    sx={{
                      width: 70,
                      height: 40,
                      borderRadius: 2,
                      backgroundColor: "#009c95",
                      marginLeft: "10px",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#f78104",
                        color: "white",
                      },
                    }}
                  >
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
