import React, { useContext } from "react";
import { Radio, Button, Col, Row, Avatar, Typography } from "antd";
import random from "lodash/random";
import startCase from "lodash/startCase";
import { Styles } from "../../theme/Style";
import UserProvider from "../../contexts/UserProvider";
import { $ReactBaseProps } from "../../../types";
import { AVATAR_IMPORT_PROVIDERS } from "../../viewConstants";

const EditAvatar = ({ classes }: $ReactBaseProps) => {
  const { user, putPictureData, updateUser } = useContext(UserProvider.context);
  const ColorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];

  const updateShape = (e) => {
    const shape = e.target.value;
    user.picture.shape = shape;
    updateUser(user);
  };

  return (
    <React.Fragment>
      <Typography.Title level={3}>Avatar</Typography.Title>
      <div>
        {user && (
          <Row>
            <Col span={16} offset={8} className={classes.box}>
              <Radio.Group
                defaultValue="initial"
                value={user.picture && user.picture.shape}
                onChange={updateShape}
              >
                <Row gutter={24}>
                  {user.picture && (
                    <React.Fragment>
                      <Col className={classes.spacing}>
                        <div className={classes.avatarWrapper}>
                          <Avatar
                            shape="square"
                            style={{
                              backgroundColor: ColorList[random(0, 3)],
                              verticalAlign: "middle",
                            }}
                            size="large"
                            gap={4}
                            src={user.picture.url}
                          >
                            {user.firstName &&
                              user.lastName &&
                              `${user.firstName.charAt(
                                0
                              )}${user.lastName.charAt(0)}`}
                          </Avatar>
                        </div>
                        <Radio.Button value="square">Square</Radio.Button>
                      </Col>
                      <Col className={classes.spacing}>
                        <div className={classes.avatarWrapper}>
                          <Avatar
                            style={{
                              backgroundColor: ColorList[random(0, 3)],
                              verticalAlign: "middle",
                            }}
                            size="large"
                            gap={4}
                            src={user.picture.url}
                          >
                            {user.firstName &&
                              user.lastName &&
                              `${user.firstName.charAt(
                                0
                              )}${user.lastName.charAt(0)}`}
                          </Avatar>
                        </div>
                        <Radio.Button value="circle">Circle</Radio.Button>
                      </Col>
                    </React.Fragment>
                  )}
                  <Col className={classes.spacing}>
                    <div className={classes.avatarWrapper}>
                      <Avatar
                        style={{
                          backgroundColor: ColorList[random(0, 3)],
                          verticalAlign: "middle",
                        }}
                        size="large"
                        gap={4}
                      >
                        {user.firstName &&
                          user.lastName &&
                          `${user.firstName.charAt(0)}${user.lastName.charAt(
                            0
                          )}`}
                      </Avatar>
                    </div>
                    <Radio.Button value="initials">Initials</Radio.Button>
                  </Col>
                </Row>
              </Radio.Group>
              <div className={classes.paddingT}>
                <Typography.Title level={4}>Import From</Typography.Title>
                <Row gutter={[16, 16]}>
                  {AVATAR_IMPORT_PROVIDERS.map((provider) => (
                    <Col key={provider}>
                      <Button onClick={() => putPictureData(provider)}>
                        {startCase(provider)}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        )}
      </div>
    </React.Fragment>
  );
};

const styles = (_theme) => ({
  box: {
    border: "1px solid #d9d9d9",
    borderRadius: "2px",
    padding: "25px",
  },
  spacing: {
    padding: "0 15px",
  },
  paddingT: {
    paddingTop: "25px",
  },
  avatarWrapper: {
    textAlign: "center",
    marginBottom: "15px",
  },
  // formLabel: {
  //   textAlign: "right",
  //   "& > label::after": {
  //     content: "':'",
  //     position: "relative",
  //     top: "-0.5px",
  //     margin: "0 8px 0 2px",
  //   },
  // },
});
export default Styles(styles)(EditAvatar);
