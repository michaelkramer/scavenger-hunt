import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Item from "./pages/Item";
import Items from "./pages/Items";
// import Users from "./components/Users";
// import Contact from "./components/Contact";
// import About from "./components/About";
const routes = {
  "/": () => <Home />,
  "/login": () => <Login />,
  "/profile": () => <Profile />,
  "/items": () => <Items />,
  "/item": () => <Item />,
  "/item/:id": ({ id }: { id: string }) => <Item id={id} />,

  // "/contact": () => <Contact />,
};
export default routes;
