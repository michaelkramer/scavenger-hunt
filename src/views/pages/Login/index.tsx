import React from "react";
import { navigate } from "hookrouter";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Styles } from "../../theme/Style";
import ApiRequest from "../../common/apiRequest";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = ({ classes }) => {
  //const { user, dispatch } = useContext(UserProvider.context);
  //console.log("dispatch", dispatch);
  const onFinish = async (values) => {
    //makeRequest(values);
    await ApiRequest("/api/auth/local", {
      verb: "post",
      params: values,
    });
    navigate("/");
    //console.log("Success:", values, status, response);
  };

  const loginOptions = [
    { title: "Facebook", link: "/auth/facebook" },
    { title: "Goodreads", link: "/auth/goodreads" },
  ];
  return (
    <div>
      <h3>Login</h3>
      <div>
        <ul>
          {loginOptions.map((option, idx) => (
            <li key={idx}>
              <a href={option.link}>Login with {option.title}</a>
            </li>
          ))}
        </ul>

        <div className={classes.formBox}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              <span className={classes.padding}>Or</span>
              <Button
                type="primary"
                htmlType="button"
                className="login-form-button"
              >
                Register now!
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
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
  padding: { padding: "0 4px" },
  formBox: { width: "400px" },
});
export default Styles(styles)(Login);
