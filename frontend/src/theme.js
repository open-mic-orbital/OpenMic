import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f78104',
      contrastText: '#fff',
      borderColor: '#fff'
    },
    secondary: {
      main: '#009c95',
      contrastText: '#fff',
      borderColor: '#fff'
    }
  }
});

export default theme;