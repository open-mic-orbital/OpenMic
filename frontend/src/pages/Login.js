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

const url = 'http://localhost:4000';

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
  // States for login
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // States for checking error
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const postLogin = async () => {
      const response = await fetch(url + '/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      const data = await response.json();
      return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email === "" ||
      password === ""
    ) {
      setError(true);
    } else {
      try {
        const data = postLogin();
        console.log(data);
        alert('Login succesful!');
        window.location.href = '/';
        setSubmitted(true);
        setError(false);
      } catch (e) {
        alert('Login unsuccesful.')
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
                  sx={{ height: 40, paddingUp: "100vh" }}
                  onClick={handleSubmit}
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
