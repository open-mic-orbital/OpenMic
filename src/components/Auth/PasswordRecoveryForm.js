import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import url from "../../utils/url";

const PasswordRecoveryForm = () => {
  const { handleSubmit, control } = useForm();

  // State for final user

  // States for password fields 
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  // States for checking error
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);

  // State for loading indicator
  const [loading, setLoading] = React.useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e);
    setSubmitted(false);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e);
    setSubmitted(false);
  };

  const postLogin = async () => {
    const response = await fetch(url + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
      }),
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
    } else {
      try {
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
