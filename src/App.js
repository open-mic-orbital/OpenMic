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
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Auth from "./pages/Auth";
import AuthRecovery from "./pages/AuthRecovery";
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
            <Route
              path="/"
              element={!myProfile ? <Landing /> : <Navigate to="/Explore" />}
            />
            <Route
              path="/Discover"
              element={!myProfile ? <Discover /> : <Navigate to="/Explore" />}
            />
            <Route
              path="*"
              element={
                !myProfile ? <Navigate to="/" /> : <Navigate to="/Explore" />
              }
            />
            <Route
              path="/AboutUs"
              element={!myProfile ? <AboutUs /> : <Navigate to="/Explore" />}
            />
            <Route
              path="/Chat"
              element={myProfile ? <Chat /> : <Navigate to="/Auth" />}
            />
            <Route
              path="/Profile"
              element={myProfile ? <Profile /> : <Navigate to="/Auth" />}
            />
            <Route
              path="/Settings"
              element={myProfile ? <Settings /> : <Navigate to="/Auth" />}
            />
            <Route
              path="/Auth"
              element={!myProfile ? <Auth /> : <Navigate to="/Explore" />}
            />
            <Route path="/PasswordReset/:id" element={<AuthRecovery />} />
            <Route
              path="/Explore"
              element={myProfile ? <Dashboard /> : <Navigate to="/Auth" />}
            />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
