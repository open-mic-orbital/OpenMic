import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import UnauthAppBar from "../components/UnauthAppBar/UnauthAppBar";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import { Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";

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
  // States for registration
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userType, setUserType] = React.useState("default"); // Default value selected

  // States for checking error
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      userType === "User Type"
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
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
        <h1>User {name} successfully registered!!</h1>
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
                  sx={{ height: 40, paddingUp: "100vh" }}
                >
                  Submit
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
