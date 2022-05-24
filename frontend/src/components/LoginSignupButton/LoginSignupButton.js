import React from 'react';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/material/styles";

const StyledButtonGroup = styled(ButtonGroup)({
  // change the text color for all buttons
  '& .MuiButtonGroup-grouped': {
    color: "white",
  },
  // change the button group dividers color
  '& .MuiButtonGroup-grouped:not(:last-of-type)': {
    borderColor: "white"
  }
});

const LoginSignupButton = () => {
  return (
    <>
    <StyledButtonGroup variant="text">
      <Button>Login</Button>
      <Button>Signup</Button>
    </StyledButtonGroup>
    </>
  );
}

export default LoginSignupButton;