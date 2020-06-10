import React, { useContext } from "react";
import find from "lodash/find";
import { Form, Button, Input, Col, Row } from "antd";
import { FacebookOutlined, TwitterOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { any } from "prop-types";
import { $ReactBaseProps } from "../../../types";

interface $Props extends $ReactBaseProps {
  userOauths: any;
}

const providers = ["facebook", "twitter"];

const providerLabel = (name: string) => {
  switch (name) {
    case "facebook":
      return (
        <label>
          <FacebookOutlined />
          &nbsp;&nbsp;Facebook
        </label>
      );
    case "twitter":
      return (
        <label>
          <TwitterOutlined />
          &nbsp;&nbsp;Twitter
        </label>
      );
    default:
      return name;
  }
};

const ConnectedAccounts = ({ classes, userOauths }: $Props) => {
  return (
    <React.Fragment>
      <h3>Connected Accounts</h3>
      {providers.map((provider, idx) => {
        const userProvider = find(
          userOauths,
          (item) => item.oauthProvider === provider
        );
        return (
          <Row key={idx} className={classes.rowSpacing}>
            <Col
              span="8"
              className={classNames("ant-form-item-label", classes.formLabel)}
            >
              {providerLabel(provider)}
            </Col>
            <Col span="16" className={classes.leftSideValues}>
              {(userProvider && "Connected") || <Button>Connect</Button>}
            </Col>
          </Row>
        );
      })}
    </React.Fragment>
  );
};
export default ConnectedAccounts;
