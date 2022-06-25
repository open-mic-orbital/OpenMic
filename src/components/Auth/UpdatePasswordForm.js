import React from "react";
import { Card, TextField, Button, CircularProgress } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import url from "../../utils/url";

const UpdatePasswordForm = ({ handleClose }) => {
  const { handleSubmit, control } = useForm();

  // State for loading indicator
  const [loading, setLoading] = React.useState(false);

  // States for password fields
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handlePasswordChange = (e) => {
    setPassword(e);
    setSubmitted(false);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e);
    setSubmitted(false);
  };

  // States for checking error
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);

  const updateUser = async () => {
    const response = await fetch(url + "/users/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ password }),
    });
    if (!response.ok) {
      const error = new Error(`An error occured: ${response.status}`);
      error.code = response.status;
      throw error;
    }
    const responseJSON = await response.json();
    return responseJSON;
  };

  const onSubmit = (data) => {
    setError(false);
    setLoading(true);
    data.preventDefault();
    if (password === "") {
      setLoading(false);
      setError(true);
      alert("Please fill out all fields");
    } else if (password !== confirmPassword) {
      setLoading(false);
      setError(true);
      alert("Passwords do not match");
    } else if (password.length < 6) {
      setLoading(false);
      setError(true);
      alert("Password must be at least 6 characters long");
    } else if (password.includes("password")) {
      setLoading(false);
      setError(true);
      alert("Password must not contain the word 'password'");
    } else {
      updateUser().then((user) => {
        setLoading(false);
        setError(false);
        setSubmitted(true);
        alert("Password update successful!");
      }).catch((e) => {
        if (e.code) {
          setLoading(false);
          alert("Password update failed! Please try again later.");
          setError(true);
        } else {
          setLoading(false);
          alert("Password update failed! Please check your network.");
          setError(true);
        }
      });
    }
  };

  return (
    <Card
      sx={{
        bgcolor: "#fff",
        borderRadius: "20px",
      }}
    >
      <h2 style={{ color: "black" }}>Update Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="Password"
            control={control}
            defaultValue=""
            rules={{ required: "Password required" }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={value}
                onChange={onChange}
                {...handlePasswordChange(value)}
                sx={{
                  marginTop: "2vh",
                  input: { color: "#10182e" },
                }}
                InputLabelProps={{
                  style: { color: "gray" },
                }}
                helperText="Enter new password."
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="PasswordConfirmation"
            control={control}
            defaultValue=""
            rules={{ required: "Password required" }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                value={value}
                onChange={onChange}
                {...handleConfirmPasswordChange(value)}
                sx={{
                  marginTop: "2vh",
                  input: { color: "#10182e" },
                }}
                InputLabelProps={{
                  style: { color: "gray" },
                }}
                helperText="Enter new password again."
              />
            )}
          />
        </div>
        <div style={{ margin: "2vh" }}>
          <Button
            disableElevation
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            onClick={onSubmit}
            sx={{
              backgroundColor: "#009c95",
              color: "white",
            }}
          >
            {(!loading && "Submit") || <CircularProgress size={20} />}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default UpdatePasswordForm;
