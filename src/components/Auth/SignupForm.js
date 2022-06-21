import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { TextField, Button, MenuItem, CircularProgress } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import url from "../../utils/url";

const SignupForm = () => {
  const { handleSubmit, control } = useForm();

  // State for final user
  const { user, setUser } = useContext(UserContext);

  // States for registration
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [userType, setUserType] = React.useState("default"); // Default value selected

  // States for checking error
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);

  // State for loading indicator
  const [loading, setLoading] = React.useState(false);

  const handleUserNameChange = (e) => {
    console.log(e);
    setUserName(e);
    setSubmitted(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e);
    setSubmitted(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e);
    setSubmitted(false);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e);
    setSubmitted(false);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e);
    setSubmitted(false);
  };

  const postSignUp = async (user) => {
    const response = await fetch(url + "/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    if (
      userName === "" ||
      email === "" ||
      password === "" ||
      userType === "default"
    ) {
      setLoading(false);
      setError(true);
      alert("Please fill out all fields");
    } else if (password.length < 8){
      setLoading(false);
      setError(true);
      alert("Password must be at least 8 characters long");
    } else if (password.includes("password")) {
      setLoading(false);
      setError(true);
      alert("Password must not contain the word 'password'");
    } else if (password !== confirmPassword) {
      setLoading(false);
      setError(true);
      alert("Passwords do not match");
    } else {
      const registered = {
        userName,
        email,
        password,
        userType,
      };
      try {
        const promise = postSignUp(registered);
        console.log(promise);
        promise
          .then((obj) => {
            if (obj._id) {
              setSubmitted(true);
              setError(false);
              setUser(obj.user);
              localStorage.setItem("user", JSON.stringify(obj.user));
              localStorage.setItem("token", "Bearer " + obj.token);
              window.location.href = obj.enabled ? "/Dashboard" : "/Profile";
              alert(successMessage);
            } else {
              setLoading(false);
              throw new Error("Signup failed");
            }
          })
          .catch((e) => {
            setLoading(false);
            alert("Signup failed! (Promise error)");
            console.log(e);
            setError(true);
          });
      } catch (e) {
        setLoading(false);
        alert("Signup failed!");
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
        <h1>User {userName} successfully registered!!</h1>
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
            name="Type"
            control={control}
            rules={{ required: "Type required" }}
            render={({ field: { onChange, value } }) => (
              <TextField
                select
                label="Type"
                variant="outlined"
                value={userType}
                onChange={onChange}
                sx={{
                  input: { color: "#10182e" },
                }}
                InputLabelProps={{
                  style: { color: "gray" },
                }}
              >
                <MenuItem value={"default"}>Select User Type</MenuItem>
                <MenuItem
                  value={"artist"}
                  onClick={() => handleUserTypeChange("artist")}
                >
                  Artist
                </MenuItem>
                <MenuItem
                  value={"venue"}
                  onClick={() => handleUserTypeChange("venue")}
                >
                  Venue
                </MenuItem>
              </TextField>
            )}
          />
        </div>
        <div>
          <Controller
            name="Username"
            control={control}
            defaultValue=""
            rules={{ required: "Name required" }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Username"
                variant="outlined"
                value={value}
                onChange={onChange}
                {...handleUserNameChange(value)}
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
                helperText="Enter your password again."
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

export default SignupForm;
