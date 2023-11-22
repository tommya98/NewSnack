import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SplashPage from "./SplashPage";
import SignIn from "./SignInPage";
import SignUp from "./SignUpPage";
import FeedPage from "./FeedPage";

const theme = createTheme({
  typography: {
    fontFamily: ["Pretendard", "Roboto"].join(","),
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashPage />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "feed",
    element: <FeedPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
