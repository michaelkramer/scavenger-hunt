import React, { useContext, useEffect, useState } from "react";
import uniq from "lodash/uniq";
import { navigate } from "hookrouter";
import { Form, Button, Input, Typography, message } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import assign from "lodash/assign";
import { Styles } from "../../theme/Style";
import UserProvider from "../../contexts/UserProvider";
import ApiRequest from "../../common/apiRequest";
import EditableTagGroup from "./EditableTagGroup";
import SelectTag from "./SelectTag";
import { $ReactBaseProps, $TagOption } from "../../../types";

interface $EditProps extends $ReactBaseProps {
  id?: string;
  values?: Object;
  tagOptions?: Array<$TagOption>;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const EditItem: React.FC<$EditProps> = ({
  id,
  values,
  tagOptions,
  classes,
}: $EditProps) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(values);
  const { user } = useContext(UserProvider.context);

  const onFinish = async (values) => {
    const { data } = await ApiRequest("/api/items", {
      verb: id ? "put" : "post",
      params: values,
    });

    if (data && data.id !== id) {
      navigate(`/item/${data.id}`);
    }
    message.success("Saved");
  };

  const onValuesChange = (changedValues, allValues) => {
    if (changedValues["basic"]) {
      const tags = allValues["tags"] || [];
      allValues["tags"] = uniq([...tags, ...changedValues["basic"]]);
      setFormData(allValues);
    }
    if (changedValues["tags"]) {
      const basic = allValues["basic"] || [];
      const basicOptions = tagOptions.filter((o) => o.category === "basic");
      const foundBasicInTags = basicOptions.filter((o) =>
        changedValues["tags"].includes(o.title)
      );
      allValues["basic"] = foundBasicInTags.map((o) => o.title);
      setFormData(allValues);
    }
  };
  useEffect(() => setFormData(values), [values]);
  useEffect(() => form.resetFields(), [formData]);

  return (
    <div>
      <div className={classes.rightButton}>
        <Button icon={<MenuOutlined />} onClick={() => navigate("/items")}>
          Return to List
        </Button>
      </div>
      <Typography.Title level={2}>Item</Typography.Title>
      <div>
        <Form
          {...layout}
          form={form}
          onFinish={onFinish}
          onValuesChange={onValuesChange}
          initialValues={formData}
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
          <Form.Item name={"basic"} label="Bacis">
            <SelectTag
              tagOptions={(tagOptions || []).filter(
                (o) => o.category === "basic"
              )}
            />
          </Form.Item>
          <Form.Item name={"tags"} label="Tags" shouldUpdate>
            <SelectTag tagOptions={tagOptions} />
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
  rightButton: {
    textAlign: "right",
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
