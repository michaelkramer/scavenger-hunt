import React, { useState } from "react";
import { A } from "hookrouter";
import { Menu } from "antd";
import { Styles } from "../theme/Style";
import { $ReactBaseProps } from "../../types";

const Navigation = ({ classes }: $ReactBaseProps) => {
  const [defaultPage] = useState(window["page"]);
  const menuItems = [
    { text: "Home", href: "/", key: "home" },
    { text: "Profile", href: "profile", key: "/profile" },
  ];
  return (
    <Menu
      mode="horizontal"
      theme="light"
      id="some"
      defaultSelectedKeys={[defaultPage || "home"]}
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
