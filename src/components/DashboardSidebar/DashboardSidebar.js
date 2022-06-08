import React from "react";
import { Box } from "@mui/material";
import DashboardIcon from "../../utils/svg/dashboard.svg";
import ChatIcon from "../../utils/svg/chat.svg";
import ProfileIcon from "../../utils/svg/profile.svg";
import SettingsIcon from "../../utils/svg/settings.svg";
import DashboardButton from "./DashboardButton";

const items = [
  {
    href: '/Dashboard',
    imgsrc: DashboardIcon,
    title: 'Dashboard'
  },
  {
    href: '/Chat',
    imgsrc: ChatIcon,
    title: 'Chat'
  },
  {
    href: '/Profile',
    imgsrc: ProfileIcon,
    title: 'Profile'
  },
  {
    href: '/Settings',
    imgsrc: SettingsIcon,
    title: 'Settings'
  }
];

const DashboardSidebar = () => {
  return (
  <Box sx={{ flexGrow: 1, flexDirection: 'column' }}>
    {items.map((item) => (
            <DashboardButton
              imgsrc={item.imgsrc}
              href={item.href}
              title={item.title}
            />
          ))}
  </Box>
  )
};

export default DashboardSidebar;