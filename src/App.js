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
import Auth from "./pages/Auth";
import { UserContext } from "./components/UserContext";

function App() {
  const [user, setUser] = useState(null);

  const userMemo = useMemo(() => ({ user, setUser }), [user, setUser]);

  const myProfile = JSON.parse(localStorage.getItem("user"));

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
              <Route path="/Chat" element={myProfile ? <Chat /> : <Navigate to='/Auth' />} />
              <Route path="/Profile" element={myProfile ? <Profile /> : <Navigate to='/Auth' />} />
              <Route path="/Settings" element={myProfile ? <Settings /> : <Navigate to='/Auth' />} />
              <Route path="/Auth" element={<Auth />} />
              <Route path="/Dashboard" element={myProfile ? <Dashboard /> : <Navigate to='/Auth' />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
