import React from "react";
import { Box, Divider } from "@mui/material";
import DashboardIcon from "../../utils/svg/dashboard.svg";
import ChatIcon from "../../utils/svg/chat.svg";
import ProfileIcon from "../../utils/svg/profile.svg";
import SettingsIcon from "../../utils/svg/settings.svg";
import DashboardButton from "./DashboardButton";
import { Link } from "react-router-dom";
import OpenMicLogo from "../../utils/images/OpenMicLogo.png";

const items = [
  {
    href: "/Dashboard",
    imgsrc: DashboardIcon,
    title: "Dashboard",
  },
  {
    href: "/Chat",
    imgsrc: ChatIcon,
    title: "Chat",
  },
  {
    href: "/Profile",
    imgsrc: ProfileIcon,
    title: "Profile",
  },
  {
    href: "/Settings",
    imgsrc: SettingsIcon,
    title: "Settings",
  },
];

const DashboardSidebar = () => {
  return (
    <Box
      height="100vh"
      bgcolor="#10182e"
      sx={{ flexGrow: 1, flexDirection: "column" }}
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
          paddingTop: "2vh"
        }}
      >
        {items.map((item) => (
          <DashboardButton
            imgsrc={item.imgsrc}
            href={item.href}
            title={item.title}
          />
        ))}
      </Box>
    </Box>
  );
};

export default DashboardSidebar;
