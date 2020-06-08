import * as React from "react";
import { A } from "hookrouter";
import { Menu } from "antd";
import { Styles } from "../theme/Style";

const Navigation = ({ classes }) => {
  const menuItems = [
    { text: "Home", href: "/", key: "home" },
    { text: "Login", href: "login", key: "login" },
    { text: "badd", href: "badd", key: "badd" },
    { text: "Profile", href: "profile", key: "profile" },
    { text: "Logout", href: "logout", key: "logout" },
  ];
  return (
    <Menu
      mode="horizontal"
      theme="light"
      id="some"
      defaultSelectedKeys={["home"]}
    >
      {menuItems.map((item) => (
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
export default Styles(styles)(Navigation);
