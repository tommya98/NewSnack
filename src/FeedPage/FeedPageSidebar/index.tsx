import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AppLogo from "./AppLogo";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const LogoWrapper = styled("div")({
  padding: "1rem 2rem", // Adjusted as previously requested
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // Align items to the start (left)
  backgroundColor: "transparent", // Removed the grey background
});

const Title = styled("h1")(({ theme }) => ({
  fontSize: "1.2rem", // Equivalent to text-2xl
  fontWeight: 600,
  color: theme.palette.text.primary,
  [theme.breakpoints.up("sm")]: {
    color: theme.palette.mode === "dark" ? "#ffffff" : "#1f2937",
  },
}));


export interface FeedPageSidebarProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  // 여기에 FeedPageSidebar 컴포넌트의 props 타입을 정의합니다.
}

// Sidebar component
const FeedPageSidebar: React.FC<FeedPageSidebarProps> = ({ setPage }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  let navigate = useNavigate();

  const handleListItemClick = (
    text: string,
    index: number,
  ) => {
    setPage(text.toLowerCase());
    setSelectedIndex(index);
  };

  const Logout = () => {
    navigate("/");
  }

  return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <LogoWrapper>
          <AppLogo />
          <Title>Newsnack</Title>
          <IconButton size="large" edge="end" color="inherit">
            <AccountCircle />
          </IconButton>
        </LogoWrapper>
        <List>
          {['Home', 'Explore', 'History', 'Favorite'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton 
              href="#"
              rel="ugc" 
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(text, index)
                }>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List sx={({marginTop : "auto"})}>
          {['Logout'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton 
              href="#"
              rel="ugc" 
              onClick={() => Logout()
                }>
                <ListItemIcon>
                  <LogoutIcon/>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
};

export default FeedPageSidebar;
