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
import Search from "./Pages/Search.jsx";
import LiteratureCourse from "./Pages/Literature course.jsx";
import CourseDetail from "./Pages/CourseDetail.jsx";
import Blog from './Pages/Blog';
import BlogDetail from "./Pages/BlogDetail.jsx";
import Pricing from "./Pages/Pricing.jsx";  

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
          path: "CourseDetail/:id",
          Component: CourseDetail,
        },
        {
          path: "Search",
          Component: Search,
        },
        {
          path: "LiteratureCourse",
          Component: LiteratureCourse,
        },
        {
          path: "Blog",
          Component: Blog,
        },
        {
          path: "BlogDetail/:id",
          Component: BlogDetail,
        },
        { 
          path: "Pricing",
          Component: Pricing,
        }
      ],
    },  
  ]
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
