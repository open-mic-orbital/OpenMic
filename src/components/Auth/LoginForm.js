import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const url = "https://openmic-backend-api.herokuapp.com";

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
      try {
        const data = postLogin();
        data
          .then((obj) => {
            if (obj.token) {
              // alert("Login succesful!");
              setUser(obj.user);
              localStorage.setItem("user", JSON.stringify(obj.user));
              localStorage.setItem("token", "Bearer " + obj.token);
              window.location.href = "/Dashboard";
              setError(false);
              setSubmitted(true);
            } else {
              setLoading(false);
              throw new Error("Invalid login");
            }
          })
          .catch((e) => {
            setLoading(false);
            alert("Login failed!");
            console.log(e);
            setError(true);
          });
      } catch (e) {
        setLoading(false);
        alert("Login unsuccesful.");
        setError(true);
      }
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User successfully logged in!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="E-mail"
            control={control}
            defaultValue=""
            rules={{ required: "E-mail required" }}
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
      </form>
    </>
  );
};

export default LoginForm;
