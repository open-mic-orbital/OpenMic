import "./App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Header from "./components/Header/Header";
// import AuthAppBar from "./components/AuthAppBar/AuthAppBar";
import UnauthAppBar from "./components/UnauthAppBar/UnauthAppBar";
import MainText from "./components/MainText/MainText";
import Icons from "./utils/images/Icons.png";
import ForArtistsButton from "./components/ForEachButton/ForArtistsButton";
import ForVenuesButton from "./components/ForEachButton/ForVenuesButton";
import Stack from "@mui/material/Stack";
// import Container from "@mui/material/Container";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';

import Landing from "./pages/Landing/Landing";
import Discover from "./pages/Discover/Discover";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Discover" element={<Discover />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        {/* <Box sx={{ flexGrow: 1, color: "white", overflow: "scroll" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ paddingBottom: "5vh" }}>
              <UnauthAppBar />
            </Grid>
            <Grid item xs={6}>
              <MainText />
              <Stack direction="row" spacing={2} sx={{ paddingLeft: "15vh" }}>
                <ForArtistsButton />
                <ForVenuesButton />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <img src={Icons} className="Logo" alt="logo"/>
            </Grid>
          </Grid>
        </Box> */}
      </Router>
    </div>
  );
}

export default App;


/* Below came with Box, is white background, with centered content. Goes below classname="App" if necessary.
      Can switch to this to see borders against the white background later on if needed */
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
      > */