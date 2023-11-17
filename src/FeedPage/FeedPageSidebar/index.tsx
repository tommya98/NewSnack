import React from "react";
import { styled } from "@mui/material/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";

const Sidebar = styled("section")(({ theme }) => ({
  height: "100vh",
  width: "16rem", // Equivalent to w-64
  backgroundColor: "#FEFEFE",
  borderRight: "1px solid #E0E0E0", // Add a right-side border
  [theme.breakpoints.up("sm")]: {
    backgroundColor: theme.palette.mode === "dark" ? "#1a202c" : "#FEFEFE",
  },
}));

const LogoWrapper = styled("div")({
  padding: "1rem 2rem", // Adjusted as previously requested
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // Align items to the start (left)
  backgroundColor: "transparent", // Removed the grey background
});

const Title = styled("h1")(({ theme }) => ({
  fontSize: "1rem", // Equivalent to text-2xl
  fontWeight: 600,
  color: theme.palette.text.primary,
  [theme.breakpoints.up("sm")]: {
    color: theme.palette.mode === "dark" ? "#ffffff" : "#1f2937",
  },
}));

const Nav = styled("nav")({
  paddingTop: "1rem", // Reduced top padding from 2rem to 1rem
  paddingBottom: "1rem", // Reduced bottom padding from 2rem to 1rem
  paddingLeft: "2rem", // Keep left padding as it was
  paddingRight: "2rem", // Keep right padding as it was
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

const NavLink = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem", // Equivalent to space-x-3 or space-x-4
  color: theme.palette.text.secondary,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
  [theme.breakpoints.up("sm")]: {
    color: theme.palette.mode === "dark" ? "#ffffff" : "#4a5568",
  },
}));

const Icon = styled("svg")({
  width: "1.25rem", // Equivalent to w-5
  height: "1.25rem", // Equivalent to h-5
});

export interface FeedPageSidebarProps {
  // 여기에 FeedPageSidebar 컴포넌트의 props 타입을 정의합니다.
}

// Sidebar component
const FeedPageSidebar: React.FC<FeedPageSidebarProps> = () => {
  return (
    <Sidebar>
      <LogoWrapper>
        {/* <Logo alt="Logo" /> */}
        <Title>Newsnack</Title>
        <IconButton size="large" edge="end" color="inherit">
          <AccountCircle />
        </IconButton>
      </LogoWrapper>
      <Nav>
        {/* Home link */}
        <NavLink href="#" rel="ugc">
          {/* Home icon SVG */}
          <Icon
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </Icon>
          <span>Home</span>
        </NavLink>

        <NavLink href="#" rel="ugc">
          {/* Home icon SVG */}
          <Icon
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </Icon>
          <span>Explore</span>
        </NavLink>

        {/* History link */}
        <NavLink href="#" rel="ugc">
          {/* History icon SVG */}
          <Icon
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M12 7v5l4 2" />
          </Icon>
          <span>History</span>
        </NavLink>

        {/* Favorite link */}
        <NavLink href="#" rel="ugc">
          {/* Favorite icon SVG */}
          <Icon
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </Icon>
          <span>Favorite</span>
        </NavLink>

        {/* Settings link */}
        <NavLink href="#" rel="ugc">
          {/* Settings icon SVG */}
          <Icon
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </Icon>
          <span>Settings</span>
        </NavLink>
      </Nav>
    </Sidebar>
  );
};

export default FeedPageSidebar;
