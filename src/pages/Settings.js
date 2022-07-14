import React, { useState, useEffect } from "react";
import { Box, Grid, Card, Button } from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import AuthAppBar from "../components/AuthAppBar/AuthAppBar";
import UpdatePasswordForm from "../components/Auth/UpdatePasswordForm";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import url from "../utils/url";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Settings = () => {
  const [open, setOpen] = React.useState(false);

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

  const handleConfirmationOpen = () => {
    setOpen(true);
  };

  const handleConfirmationClose = () => {
    setOpen(false);
  };

  const handleLogoutEverywhere = () => {
    fetch(url + "/users/logoutAll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/";
        }
      }
      ).catch((err) => {
        console.log(err);
      }
      );
  }

  const deleteUser = async () => {
    const response = await fetch(url + "/users/me", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    if (!response.ok) {
      const error = new Error(`An error occured: ${response.status}`);
      error.code = response.status;
      throw error;
    }
    const data = await response.json();
    return data;
  };
  const handleDeleteAccount = () => {
    setOpen(false);
    deleteUser()
      .then((obj) => {
        if (obj._id) {
          window.localStorage.clear();
          window.location.href = "/";
          alert("Account Deleted! You will now be redirected to the homepage.");
        } else {
          throw new Error("Deletion failed");
        }
      })
      .catch((e) => {
        if (e.code) {
          alert("Deletion failed! Please try again later.");
        } else {
          alert("Deletion failed! Please check your network.");
        }
      });
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        color: "#000",
        overflow: "scroll",
        backgroundColor: "#fcfcfc",
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
          <h1>Settings</h1>
          <Box marginLeft="20%" width="60%">
            <UpdatePasswordForm />
            <Card
              sx={{
                bgcolor: "#fff",
                borderRadius: "20px",
                marginTop: "5%",
              }}
            >
              <div>
                <h2>Logout From All Devices</h2>
                <p style={{ marginLeft: "10%", width: "80%", color: "gray" }}>
                  Press this button to log out from OpenMic on every device your
                  account is currently logged into.
                </p>
              </div>
              <div style={{ margin: "2vh" }}>
                <Button
                  disableElevation
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleLogoutEverywhere}
                  sx={{
                    backgroundColor: "#db3a37",
                    color: "white",
                  }}
                >
                  Logout All
                </Button>
              </div>
            </Card>
            <Card
              sx={{
                bgcolor: "#fff",
                borderRadius: "20px",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            >
              <div>
                <h2>Delete Account</h2>
                <p style={{ marginLeft: "10%", width: "80%", color: "gray" }}>
                  Note: this is a <b>nuclear</b> option. Pressing this will
                  completely delete your account from the database. This change
                  is irreversible.
                </p>
              </div>
              <div style={{ margin: "2vh" }}>
                <Button
                  disableElevation
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleConfirmationOpen}
                  sx={{
                    backgroundColor: "#db3a37",
                    color: "white",
                  }}
                >
                  Delete Account
                </Button>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleConfirmationClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>{"Delete Account?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      Final Confirmation: Are you <b>sure</b> you want to delete
                      your account?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleConfirmationClose}>Disagree</Button>
                    <Button onClick={handleDeleteAccount}>Agree</Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
