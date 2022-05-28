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
  Navigate,
} from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Discover from "./pages/Discover/Discover";
import Signup from "./pages/Signup/Signup";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Discover" element={<Discover />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
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
