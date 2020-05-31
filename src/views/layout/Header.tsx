import React, { useContext, useState } from "react";
import { A } from "hookrouter";
import { random, isEmpty } from "lodash";

import PropTypes from "prop-types";
import { Avatar, Row, Col, Button } from "antd";
import { LogoutOutlined, LoginOutlined } from "@ant-design/icons";
import { Styles } from "../theme/Style";
import Navigation from "../components/Navigation";
import UserProvider from "../contexts/UserProvider";

const Header = ({ classes }) => {
  const { user, logout } = useContext(UserProvider.context);
  const ColorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
  const text = isEmpty(user) ? "No User" : JSON.stringify(user, null, 4);
  return (
    <React.Fragment>
      <Row>
        <Col span={3}>Logo Here</Col>
        <Col span={18}>
          <Navigation />
        </Col>
        <Col span={3}>
          {user && user.firstName && (
            <Row>
              <Col span={12}>
                <Avatar
                  style={{
                    backgroundColor: ColorList[random(0, 3)],
                    verticalAlign: "middle",
                  }}
                  size="large"
                  gap={4}
                >
                  {user.firstName}
                </Avatar>
              </Col>
              <Col span={12}>
                <Button
                  type="link"
                  size={"small"}
                  onClick={logout}
                  icon={<LogoutOutlined />}
                >
                  Logout
                </Button>
              </Col>
            </Row>
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
