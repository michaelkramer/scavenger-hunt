import React, { useContext, useState } from "react";
import { A } from "hookrouter";
import { random, isEmpty } from "lodash";

import PropTypes from "prop-types";
import { Avatar, Row, Col, Button, Menu, Dropdown } from "antd";
import { LogoutOutlined, LoginOutlined } from "@ant-design/icons";
import { Styles } from "../theme/Style";
import Navigation from "../components/Navigation";
import UserProvider from "../contexts/UserProvider";

const Header = ({ classes }) => {
  const { user, logout } = useContext(UserProvider.context);
  const ColorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
  const text = isEmpty(user) ? "No User" : JSON.stringify(user, null, 4);

  const onMenuClick = ({ key }) => {
    console.log(key);
    switch (key) {
      case logout:
        logout();
        break;

      default:
        break;
    }
  };

  const menu = (
    <Menu>
      {/* <Menu.ItemGroup title="Item 1"> */}
      <Menu.Item key="setting:1">Option 1</Menu.Item>
      <Menu.Item key="setting:2">Option 2</Menu.Item>
      {/* </Menu.ItemGroup>
      <Menu.ItemGroup title="Item 2"> */}
      <Menu.Item key="setting:3">Option 3</Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={logout}>
        Logout
      </Menu.Item>
      {/* </Menu.ItemGroup> */}
    </Menu>
  );

  const shape =
    user.picture && user.picture.shape !== "initials" && user.picture.shape;
  const src =
    user.picture && user.picture.shape !== "initials" && user.picture.url;

  return (
    <React.Fragment>
      <Row>
        <Col span={3}>Logo Here</Col>
        <Col span={18}>
          <Navigation />
        </Col>
        <Col span={3}>
          {user && user.firstName && (
            <Dropdown overlay={menu}>
              <Avatar
                style={{
                  backgroundColor: ColorList[random(0, 3)],
                  verticalAlign: "middle",
                }}
                shape={shape}
                size="large"
                gap={4}
                src={src}
              >
                {`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}
              </Avatar>
            </Dropdown>
          )}
          {user && !user.firstName && (
            <A href={"login"}>
              <Button type="link" shape="circle" icon={<LoginOutlined />}>
                Login
              </Button>
            </A>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};

Header.propTypes = {
  classes: PropTypes.any,
};

const styles = (_theme) => ({});
export default Styles(styles)(Header);
