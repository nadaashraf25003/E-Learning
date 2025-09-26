// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider } from "react-router-dom";

// CSS
import "./index.css";

// Components
import App from "./App.jsx";
import Home from "./Home.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Courses from "./Pages/Courses.jsx";
import Blog from "./Pages/Blog.jsx";
let router = createBrowserRouter(
  [
    {
      path: "/",
      Component: App,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "Register",
          Component: SignUp,
        },
        {
          path: "Login",
          Component: SignIn,
        },
        {
          path: "Courses",
          Component: Courses,
        },
        {
          path: "Blog",
          Component: Blog,
        },
      ],
    },
  ]
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
