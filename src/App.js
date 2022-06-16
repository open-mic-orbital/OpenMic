import "./App.css";
import { useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Landing from "./pages/Landing";
import Discover from "./pages/Discover";
import Signup from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { UserContext } from "./components/UserContext";


function App() {
  const [user, setUser] = useState(null);

  const userMemo = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <UserContext.Provider value={userMemo}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Discover" element={<Discover />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Chat" element={<Chat />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
