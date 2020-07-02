import React from "react";
import { HookRouter } from "hookrouter";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Item from "./pages/Item";
import Items from "./pages/Items";
import EbayResults from "./pages/ebay/Results";
import Admin from "./pages/Admin";
// import Users from "./components/Users";
// import Contact from "./components/Contact";
// import About from "./components/About";
const routesBasic: HookRouter.RouteObject = {
  "/": () => <Home />,
  "/login": () => <Login />,
};

const routesAuthorized: HookRouter.RouteObject = {
  "/": () => <Home />,
  "/login": () => <Login />,
  "/profile": () => <Profile />,
  "/items": () => <Items />,
  "/item": () => <Item />,
  "/item/:id": (obj: HookRouter.QueryParams) => <Item {...obj} />,

  "/admin": () => <Admin />,
  "/ebay-search": () => <EbayResults />,
  // "/contact": () => <Contact />,
};

export default { routesBasic, routesAuthorized };
