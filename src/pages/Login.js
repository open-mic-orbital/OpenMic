import React, { useContext } from "react";
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";
import { styled } from "@mui/material/styles";
import {
  Button,
  Typography,
  ThemeProvider,
  CircularProgress,
  FormControl,
  Box,
  Grid,
  TextField,
} from "@mui/material";
import theme from "../theme";
import { UserContext } from "../components/UserContext";

const url = "https://openmic-backend-api.herokuapp.com";

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

export default function Login() {
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
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (email === "" || password === "") {
      setLoading(false);
      setError(true);
    } else {
      try {
        const data = postLogin();
        data
          .then((obj) => {
            if (obj.token) {
              alert("Login succesful!");
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
    <Box sx={{ flexGrow: 1, color: "white", overflow: "scroll" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <UnauthAppBar />
        </Grid>
        <Grid item xs={12}>
          <h1>Login</h1>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            justifyContent="flex-end"
          >
            <FormControl>
              <ThemeProvider theme={theme}>
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
