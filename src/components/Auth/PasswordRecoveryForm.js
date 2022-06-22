import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import url from "../../utils/url";

const PasswordRecoveryForm = (props) => {
  const { handleSubmit, control } = useForm();

  // States for password fields
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  // States for checking error
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);

  // State for loading indicator
  const [loading, setLoading] = React.useState(false);

  // Get token from URL
  const authToken = window.location.href.split("/")[4];

  const handlePasswordChange = (e) => {
    setPassword(e);
    setSubmitted(false);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e);
    setSubmitted(false);
  };

  const updatePassword = async (user) => {
    const response = await fetch(url + "/users/resetPassword", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  };

  const onSubmit = (e) => {
    setError(false);
    setLoading(true);
    e.preventDefault();
    if (password === "") {
      setLoading(false);
      setError(true);
      alert("Please fill out all fields");
    } else if (password !== confirmPassword) {
      setLoading(false);
      setError(true);
      alert("Passwords do not match");
    } else if (password.length < 8) {
      setLoading(false);
      setError(true);
      alert("Password must be at least 8 characters long");
    } else if (password.includes("password")) {
      setLoading(false);
      setError(true);
      alert("Password must not contain the word 'password'");
    } else {
      try {
        const newData = { password };
        const result = updatePassword(newData);
        result
          .then((user) => {
            setLoading(false);
            alert("Password reset success!");
            window.location.href = "/Auth";
          })
          .catch((e) => {
            console.log(e);
            setLoading(false);
            alert("Password reset failed");
          });
        // const data = postLogin();
        // data
        //   .then((obj) => {
        //     if (obj.token) {
        //       // alert("Login succesful!");
        //       localStorage.setItem("user", JSON.stringify(obj.user));
        //       localStorage.setItem("token", "Bearer " + obj.token);
        //       window.location.href = obj.enabled ? "/Dashboard" : "/Profile";
        //       setError(false);
        //       setSubmitted(true);
        //     } else {
        //       setLoading(false);
        //       throw new Error("Invalid login");
        //     }
        //   })
        //   .catch((e) => {
        //     setLoading(false);
        //     alert("Login failed!");
        //     console.log(e);
        //     setError(true);
        //   });
      } catch (e) {
        setLoading(false);
        alert("Password update unsuccesful.");
        setError(true);
      }
    }
  };

  return (
    <>
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
    </>
  );
};

export default PasswordRecoveryForm;
