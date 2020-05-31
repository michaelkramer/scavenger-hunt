import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import useApiRequest, {
  FETCHING,
  SUCCESS,
  ERROR,
  CREATE,
} from "../common/useApiRequest";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const User = () => {
  const [userId, setUserId] = useState();
  const [apiPath, setApiPath] = useState("/api/user");
  const [apiAction, setApiAction] = useState(FETCHING);
  const [apiVerb, setApiVerb] = useState("get");

  //`/api/user/${userId}`;

  const onFinish = (values) => {
    //dispatch({ type: "success" });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    //dispatch({ type: "error" });
    console.log("Failed:", errorInfo);
  };
  const [{ status, response }, makeRequest] = useApiRequest(
    apiAction,
    apiPath,
    {
      verb: "get",
    }
  );

  return (
    <div className="api-request">
      <div className="api-request__info">
        {
          'Enter a user id and click the "Get User!" button. Greater than 10 will produce an error.'
        }
      </div>
      <input
        className="api-request__user-id-input"
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button className="api-request__request-button" onClick={makeRequest}>
        Get User!
      </button>
      {status === CREATE && (
        <div>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="FirstName"
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="LastName"
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
      {status === FETCHING && (
        <div className="api-request__fetching">Fetching...</div>
      )}
      {status === SUCCESS && (
        <div className="api-request__user-info-container">
          <div className="api-request__user-name">
            {response.data.firstName}
          </div>
          <div className="api-request__user-name">{response.data.lastName}</div>
          <div className="api-request__user-email">{response.data.email}</div>
          <div className="api-request__user-phone">
            {response.data.updatedAt}
          </div>
        </div>
      )}
      {status === ERROR && (
        <div className="api-request__error-container">
          <br />
          <div className="api-request__error-response">
            {JSON.stringify(response)}
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
