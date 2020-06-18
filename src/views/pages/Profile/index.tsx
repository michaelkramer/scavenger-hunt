import React, { useContext } from "react";
import { Form, Button, Input, Typography } from "antd";
import { Styles } from "../../theme/Style";
import UserProvider from "../../contexts/UserProvider";
import ConnectedAccounts from "./ConnectedAccounts";
import EditAvatar from "./EditAvatar";

import { $ReactBaseProps } from "../../../types";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Login = (props: $ReactBaseProps) => {
  const { user, updateUser } = useContext(UserProvider.context);

  return (
    <div>
      <Typography.Title level={2}>Profile</Typography.Title>
      <div>
        <Form
          {...layout}
          onFinish={updateUser}
          validateMessages={validateMessages}
          initialValues={user}
        >
          <Form.Item
            name={"firstName"}
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"lastName"}
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={"email"} label="Email" rules={[{ type: "email" }]}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <EditAvatar />
      <ConnectedAccounts userOauths={user.userOauths} {...props} />
    </div>
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
  rowSpacing: {
    marginBottom: "24px",
  },
  leftSideValues: {
    display: "flex",
    alignItems: "center",
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
export default Styles(styles)(Login);
