import React from "react";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import OpenMicLogo from "../../utils/images/OpenMicLogo.png";
import DashboardButton from "./DashboardButton";
import LogoutButton from "./LogoutButton";

import dashboardUnselected from "../../utils/svg/dashboardUnselected.svg";
import dashboardSelected from "../../utils/svg/dashboardSelected.svg";
import chatUnselected from "../../utils/svg/chatUnselected.svg";
import chatSelected from "../../utils/svg/chatSelected.svg";
import profileUnselected from "../../utils/svg/profileUnselected.svg";
import profileSelected from "../../utils/svg/profileSelected.svg";
import settingsUnselected from "../../utils/svg/settingsUnselected.svg";
import settingsSelected from "../../utils/svg/settingsSelected.svg";

const items = [
  {
    href: "/Explore",
    unselected: dashboardUnselected,
    selected: dashboardSelected,
    title: "Explore",
  },
  {
    href: "/Profile",
    unselected: profileUnselected,
    selected: profileSelected,
    title: "Profile",
  },
  {
    href: "/Chat",
    unselected: chatUnselected,
    selected: chatSelected,
    title: "Chat",
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
        <Link to="/Explore">
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
          marginTop: "2vh",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {items.map((item) => (
          <DashboardButton
            unselected={item.unselected}
            selected={item.selected}
            href={item.href}
            title={item.title}
            key={item.title}
          />
        ))}
        <LogoutButton />
      </Box>
    </Box>
  );
};

export default DashboardSidebar;
