import React from "react";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import OpenMicLogo from "../../utils/images/OpenMicLogo.png";
import DashboardButton from "./DashboardButton";
import LogoutButton from "./LogoutButton";

import dashboardUnselected from "../../utils/svg/dashboardUnselected.svg";
import dashboardSelected from "../../utils/svg/dashboardSelected.svg";
// import chatUnselected from "../../utils/svg/chatUnselected.svg";
// import chatSelected from "../../utils/svg/chatSelected.svg";
import profileUnselected from "../../utils/svg/profileUnselected.svg";
import profileSelected from "../../utils/svg/profileSelected.svg";
import settingsUnselected from "../../utils/svg/settingsUnselected.svg";
import settingsSelected from "../../utils/svg/settingsSelected.svg";

const items = [
  {
    href: "/Dashboard",
    unselected: dashboardUnselected,
    selected: dashboardSelected,
    title: "Dashboard",
  },
  // Chat will be added in Milestone 3.
  // {
  //   href: "/Chat",
  //   unselected: chatUnselected,
  //   selected: chatSelected,
  //   title: "Chat",
  // },
  {
    href: "/Profile",
    unselected: profileUnselected,
    selected: profileSelected,
    title: "Profile",
  },
  {
    href: "/Settings",
    unselected: settingsUnselected,
    selected: settingsSelected,
    title: "Settings",
  },
];

const DashboardSidebar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        bgcolor: "#10182e",
      }}
    >
      {/* Logo */}
      <Box sx={{ p: 3 }}>
        <Link to="/Dashboard">
          <img src={OpenMicLogo} className="Logo" height={50} alt="logo" />
        </Link>
      </Box>

      <Divider
        sx={{
          borderColor: "rgba(255,255,255, 0.1)",
          my: 0,
        }}
      />

      {/* Buttons */}
      <Box
        sx={{
          flexGrow: 1,
          paddingTop: "2vh",
          justifyContent: "center",
        }}
      >
        {items.map((item) => (
          <DashboardButton
            unselected={item.unselected}
            selected={item.selected}
            href={item.href}
            title={item.title}
          />
        ))}
        <LogoutButton />
      </Box>
    </Box>
  );
};

export default DashboardSidebar;
