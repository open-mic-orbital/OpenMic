import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import url from "../../utils/url";

const LoginForm = () => {
  const { handleSubmit, control } = useForm();

  // State for final user
  const { user, setUser } = useContext(UserContext);

  // States for login
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // States for checking error
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);

  // State for loading indicator
  const [loading, setLoading] = React.useState(false);

  // State for Forgot Password form
  const [forgotPassword, setForgotPassword] = React.useState(false);

  const handleEmailChange = (e) => {
    setEmail(e);
    setSubmitted(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e);
    setSubmitted(false);
  };

  const postLogin = async () => {
    const response = await fetch(url + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response.ok) {
      const error = new Error(`An error occured: ${response.status}`);
      error.code = response.status;
      throw error;
    }
    const data = await response.json();
    return data;
  };

  const onSubmit = (e) => {
    setError(false);
    setLoading(true);
    e.preventDefault();
    if (email === "" || password === "") {
      setLoading(false);
      setError(true);
      alert("Please fill out all fields");
    } else {
      postLogin().then((obj) => {
        if (obj.token) {
          setUser(obj.user);
          localStorage.setItem("user", JSON.stringify(obj.user));
          localStorage.setItem("token", "Bearer " + obj.token);
          window.location.href = obj.enabled ? "/Dashboard" : "/Profile";
          setError(false);
          setSubmitted(true);
        } else {
          setLoading(false);
          throw new Error("Invalid login");
        }
      }).catch((e) => {
        if (e.code) {
          setLoading(false);
          alert("Login failed! Invalid credentials.");
          setError(true);
        } else {
          setLoading(false);
          alert("Login failed! Please check your network.");
          setError(true);
        }
      });
    }
  };

  const postReset = async () => {
    const response = await fetch(url + "/users/forgot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    if (!response.ok) {
      const error = new Error(`An error occured: ${response.status}`);
      error.code = response.status;
      throw error;
    }
    return response;
  };

  const onSubmitForgotPassword = () => {
    setLoading(true);
    postReset().then(() => {
      setLoading(false);
      setForgotPassword(false);
      alert(
        "Check your email for password reset instructions. If you do not receive an email, please check your spam folder."
      );
    }).catch((e) => {
      if (e.code) {
        setLoading(false);
        setForgotPassword(true);
        alert("Password reset unsuccessful. Please check your e-mail or try again later.");
      } else {
        setLoading(false);
        setForgotPassword(true);
        alert("Password reset unsuccessful. Please check your network.")
      }
    });
  };

  if (forgotPassword) {
    return (
      <>
        <form onSubmit={handleSubmit(onSubmitForgotPassword)}>
          <div>
            <Controller
              name="E-mail"
              control={control}
              defaultValue=""
              rules={{ required: "E-mail required" }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Email"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  {...handleEmailChange(value)}
                  sx={{
                    marginTop: "2vh",
                    input: { color: "#10182e" },
                  }}
                  InputLabelProps={{
                    style: { color: "gray" },
                  }}
                  helperText="Enter your e-mail address to receive a password recovery form."
                />
              )}
            />
          </div>
          <div style={{ margin: "2vh" }}>
            <Button
              disableElevation
              variant="contained"
              color="primary"
              onClick={() => setForgotPassword(false)}
              sx={{
                backgroundColor: "#f87104",
                color: "white",
                marginRight: "1%",
              }}
            >
              Back
            </Button>
            <Button
              disableElevation
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              onClick={onSubmitForgotPassword}
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
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="E-mail"
            control={control}
            defaultValue=""
            rules={{ required: "Username or E-mail required" }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Username or Email"
                variant="outlined"
                value={value}
                onChange={onChange}
                {...handleEmailChange(value)}
                sx={{
                  marginTop: "2vh",
                  input: { color: "#10182e" },
                }}
                InputLabelProps={{
                  style: { color: "gray" },
                }}
              />
            )}
          />
        </div>
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
        <div style={{ margin: "2vh" }}>
          <Button
            disableElevation
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            onClick={() => setForgotPassword(true)}
            sx={{
              backgroundColor: "#f78104",
              color: "white",
            }}
          >
            Forgot Password
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
