import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f78104",
      contrastText: "#fff",
      borderColor: "#fff",
    },
    secondary: {
      main: "#009c95",
      contrastText: "#fff",
      borderColor: "#fff",
    },
    multilineColor: {
      color: "#fff",
    },
    select: {
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: '#f78104',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#009c95',
        borderWidth: '0.15rem',
      },
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderColor: "blue"
      },
      "&:before": {
        borderColor: "red"
      },
    },
  },
});

export default theme;
