import React from "react";
import find from "lodash/find";
import { Typography, Button, Col, Row } from "antd";
import classNames from "classnames";
import SocialMediaLabel from "../../common/socialMedia/Label";
import { $ReactBaseProps } from "../../../types";
import { OAUTH_LOGINS } from "../../viewConstants";

interface $Props extends $ReactBaseProps {
  userOauths: any;
}

const ConnectedAccounts = ({ classes, userOauths }: $Props) => {
  return (
    <React.Fragment>
      <Typography.Title level={3}>Connected Accounts</Typography.Title>
      {OAUTH_LOGINS.map((provider, idx) => {
        const userProvider = find(
          userOauths,
          (item) => item.oauthProvider === provider.name
        );
        return (
          <Row key={idx} className={classes.rowSpacing}>
            <Col
              span="8"
              className={classNames("ant-form-item-label", classes.formLabel)}
            >
              {SocialMediaLabel[provider.name]}
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
