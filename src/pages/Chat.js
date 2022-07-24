import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Grid,
  Divider,
  CircularProgress,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import Conversation from "../components/Chat/Conversation";
import Message from "../components/Chat/Message";
import url from "../utils/url";
import { io } from "socket.io-client";

const Chat = () => {
  const myProfile = JSON.parse(localStorage.getItem("user"));
  const [currentChat, setCurrentChat] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("https://openmic-chat.herokuapp.com");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", myProfile._id);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [myProfile]);

  useEffect(() => {
    const getConversations = async () => {
      const response = await fetch(url + "/conversations/" + myProfile._id, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setConversations(data);
    };
    getConversations().then(() => setLoading(false));
  }, [myProfile._id]);

  useEffect(() => {
    const getMessages = async () => {
      setLoadingMessages(true);
      const response = await fetch(url + "/messages/" + currentChat?._id, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setMessages(data);
    };
    getMessages().then(() => setLoadingMessages(false));
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: myProfile._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== myProfile._id
    );

    socket.current.emit("sendMessage", {
      senderId: myProfile._id,
      receiverId,
      text: newMessage,
    });

    const response = await fetch(url + "/messages/", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    const data = await response.json();
    setMessages([...messages, data]);
    setNewMessage("");
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
                  height: isMobile ? "90vh" : "85vh",
                  overflowX: "scroll",
                  whiteSpace: "nowrap",
                }}
              >
                {loading ? <CircularProgress size={20} /> : ""}
                {conversations.map((chat) => (
                  <div onClick={() => setCurrentChat(chat)}>
                    <Conversation
                      convo={chat.members.filter((x) => x !== myProfile._id)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div classname="chatbox" style={{ flex: 7 }}>
              <div
                classname="chatboxWrapper"
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingBottom: "10px",
                  backgroundColor: "#fcfcfc",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {currentChat ? (
                  <>
                    {loadingMessages ? (
                      <Typography fontSize={24} color={"gray"}>
                        Loading...
                      </Typography>
                    ) : (
                      <div
                        className="chatboxTop"
                        style={{
                          height: isMobile ? "75vh" : "70vh",
                          overflowY: "scroll",
                          paddingRight: "10px",
                        }}
                      >
                        {messages.map((message) => (
                          <div ref={scrollRef}>
                            <Message
                              message={message}
                              own={message.sender === myProfile._id}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    <div
                      className="chatBoxBottom"
                      style={{
                        marginTop: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Divider orientation="horizontal" flexItem />
                      <TextareaAutosize
                        type="text"
                        placeholder="Type a message..."
                        onChange={(e) => setNewMessage(e.target.value)}
                        value={newMessage}
                        style={{
                          height: "60px",
                          width: "80%",
                          padding: "10px",
                        }}
                      />
                      <Button
                        onClick={handleSubmit}
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
                  </>
                ) : (
                  <span
                    style={{
                      position: "absolute",
                      marginTop: "5%",
                      fontSize: "50px",
                      color: "gray",
                    }}
                  >
                    Open a conversation to start a text chat.
                  </span>
                )}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
