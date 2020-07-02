import React, { useState, useContext, useEffect } from "react";
import { A } from "hookrouter";
import { Menu } from "antd";
import isEmpty from "lodash/isEmpty";
import UserProvider from "../contexts/UserProvider";
import { withStyles } from "../theme/Style";
import { $ReactBaseProps } from "../../types";

const Navigation = ({ classes }: $ReactBaseProps) => {
  const [defaultPage, setDefaultPage] = useState("/");
  const [menu, setMenu] = useState([{ text: "Home", href: "/", key: "home" }]);
  const { user } = useContext(UserProvider.context);
  const menuItems = [{ text: "Home", href: "/", key: "home" }];

  useEffect(() => {
    if (!isEmpty(user)) {
      menuItems.push(
        { text: "Profile", href: "/profile", key: "/profile" },
        { text: "Items", href: "/items", key: "/items" },
        {
          text: "Search",
          href: "/ebay-search",
          key: "/ebay-search",
        },
        { text: "Admin", href: "/admin", key: "/admin" }
      );
      setMenu(menuItems);
    }
    setDefaultPage(window["page"]);
    return () => {};
  }, [user]);

  return (
    <Menu
      mode="horizontal"
      theme="light"
      id="some"
      defaultSelectedKeys={[defaultPage || "home"]}
    >
      {menu.map((item) => (
        <Menu.Item key={item.key}>
          <A href={item.href}>{item.text}</A>
        </Menu.Item>
      ))}
    </Menu>
  );
};

const styles = (_theme) => ({
  layout: {
    color: "white",
  },
  container: {
    color: "#f00",
    padding: "20px",
  },
});
export default withStyles(styles)(Navigation);
