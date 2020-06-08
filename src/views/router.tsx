import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
// import Users from "./components/Users";
// import Contact from "./components/Contact";
// import About from "./components/About";
const routes = {
  "/": () => <Home />,
  "/login": () => <Login />,
  "/profile": () => <Profile />,
  // "/contact": () => <Contact />,
};
export default routes;
