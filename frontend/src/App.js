import "./App.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from "./components/Header/Header";
import AuthAppBar from "./components/AuthAppBar/AuthAppBar";
import UnauthAppBar from "./components/UnauthAppBar/UnauthAppBar";
import MainText from "./components/MainText/MainText";
import Icons from "./utils/images/Icons.png";
// import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      {/* Below came with Box, is white background, with centered content.
      Can switch to this to see borders against the white background later on if needed*/
      /* <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          bgcolor: 'background.paper',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: 1,
          fontWeight: 'bold',
        }}
      > */}
      <Box sx={{flexGrow: 1, color: 'white', overflow: 'scroll'}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <UnauthAppBar />
          </Grid>
          <Grid item xs={6}>
            <MainText />
          </Grid>
          <Grid item xs={6}>
            <img src={Icons} className="Logo" alt="logo" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;