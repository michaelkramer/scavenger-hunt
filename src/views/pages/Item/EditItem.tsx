import React, { useContext, useEffect } from "react";
import { navigate } from "hookrouter";
import { Form, Button, Input, Typography, Select } from "antd";
import assign from "lodash/assign";
import { Styles } from "../../theme/Style";
import UserProvider from "../../contexts/UserProvider";
import ApiRequest from "../../common/apiRequest";
import EditableTagGroup from "./EditableTagGroup";
import SelectTag from "./SelectTag";
import { $ReactBaseProps } from "../../../types";

interface $EditProps extends $ReactBaseProps {
  id?: string;
  values?: Object;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const EditItem: React.FC<$EditProps> = ({ id, values }: $EditProps) => {
  const [form] = Form.useForm();
  const { user } = useContext(UserProvider.context);

  const onFinish = async (values) => {
    const { data } = await ApiRequest("/api/items", {
      verb: id ? "put" : "post",
      params: values,
    });

    if (data && data.id !== id) {
      navigate(`/item/${data.id}`);
    }
  };

  useEffect(() => form.resetFields(), [values]);

  return (
    <div>
      <Typography.Title level={2}>Item</Typography.Title>
      <div>
        <Form
          {...layout}
          form={form}
          onFinish={onFinish}
          initialValues={values}
        >
          <Form.Item name={"id"}>
            <Input type="hidden" />
          </Form.Item>
          <Form.Item
            //initialValue={values && values.name}
            name={"name"}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            //initialValue={values && values.description}
            name={"description"}
            label="Description"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={"tags"} label="Tags">
            <SelectTag />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
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
export default Styles(styles)(EditItem);
