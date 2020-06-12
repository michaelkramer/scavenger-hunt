import React, { useContext } from "react";
import { Radio, Button, Col, Row, Avatar } from "antd";
import { FacebookOutlined } from "@ant-design/icons";
import { random } from "lodash";
import UserProvider from "../../contexts/UserProvider";
import { $ReactBaseProps } from "../../../types";

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
      <h3>Avatar</h3>
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
              <div style={{ textAlign: "right", width: "100%" }}>
                <Button onClick={putPictureData}>Update From Facebook</Button>
              </div>
            </Col>
          </Row>
        )}
      </div>
    </React.Fragment>
  );
};

export default EditAvatar;
