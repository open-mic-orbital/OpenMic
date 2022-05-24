import "./App.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from "./components/Header/Header";
import AuthAppBar from "./components/AuthAppBar/AuthAppBar";
import UnauthAppBar from "./components/UnauthAppBar/UnauthAppBar";
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
          <Grid item xs={8}>
            <Header />
          </Grid>
          <Grid item xs={4}>
            <p>
              In a grid, setting the item xs value to 12 makes that particular grid item take up the whole viewport size horizontally.
              Currently, this text you're reading is of size 4, compared to the header section you see to the left, which takes up the reminaing 8.
              So this text should be one-third of the browser width.
            </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;