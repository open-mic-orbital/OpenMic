import React, { useContext } from "react";
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  CircularProgress,
} from "@mui/material";
import theme from "../theme";
import { UserContext } from "../components/UserContext";
import url from "../utils/url";

const StyledTextField = styled(TextField)({
  "& defaultValue": {
    color: "white",
  },
  "& label": {
    color: "#f78104",
  },
  "&:hover label": {
    fontWeight: 700,
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#f78104",
    },
    "&:hover fieldset": {
      borderColor: "#009c95",
      borderWidth: 2,
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

export default function Signup() {
  // State for final user
  const { user, setUser } = useContext(UserContext);

  // States for registration
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userType, setUserType] = React.useState("default"); // Default value selected

  // States for checking error
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);

  // State for loading indicator
  const [loading, setLoading] = React.useState(false);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
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

  const handleSubmit = (e) => {
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
    <Box sx={{ flexGrow: 1, color: "white", overflow: "scroll" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <UnauthAppBar />
        </Grid>
        <Grid item xs={12}>
          <h1>Signup</h1>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            justifyContent="flex-end"
          >
            <FormControl sx={{ m: 1 }}>
              <ThemeProvider theme={theme}>
                {/* <InputLabel
                  required
                  id="simple-select"
                  sx={{ color: "#f78104" }}
                >
                  User Type
                </InputLabel> */}
                <Select
                  required
                  variant="outlined"
                  labelId="simple-select"
                  id="demo-simple-select"
                  value={userType}
                  // label="User Type *"
                  // Label text needs to be the same as the InputLabel text
                  // Add * if the field is required
                  sx={{ color: "#f78104", border: "1px solid #f78104" }}
                  onChange={handleUserTypeChange}
                >
                  <MenuItem value="default">Select User Type *</MenuItem>
                  <MenuItem value={"artist"}>Artist</MenuItem>
                  <MenuItem value={"venue"}>Venue</MenuItem>
                </Select>
                <StyledTextField
                  required
                  id="outlined-required"
                  label="Username"
                  sx={{ input: { color: "white" } }}
                  onChange={handleUserNameChange}
                />
                <StyledTextField
                  required
                  id="outlined-required"
                  label="E-mail"
                  sx={{ input: { color: "white" } }}
                  onChange={handleEmailChange}
                />

                <StyledTextField
                  required
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  sx={{ input: { color: "white" } }}
                  onChange={handlePasswordChange}
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{ height: 40, paddingUp: "100vh" }}
                  onClick={handleSubmit}
                >
                  {(!loading && "Submit") || <CircularProgress size={20} />}
                </Button>
                <Typography align="right" variant="caption">
                  * Required
                </Typography>
              </ThemeProvider>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
