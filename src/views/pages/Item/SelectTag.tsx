import React, { useState } from "react";
import { withStyles } from "../../theme/Style";
import { Select } from "antd";
import { $TagOption } from "../../../types";

interface $Props {
  value: Array<string>;
  tagOptions: Array<$TagOption>;
  onChange: Function;
}

interface InputProps {
  value?: Array<string>;
  onChange?: (value: Array<string>) => void;
}

const SelectTag = ({ value, onChange, tagOptions }: $Props) => {
  const [tags, setTags] = useState(value);

  const triggerChange = (changedValue) => {
    if (onChange) {
      onChange(changedValue.tags);
    }
  };

  const handleChange = (tags) => {
    setTags(tags);
    triggerChange({ tags });
  };

  let filteredOptions = tagOptions || [];
  filteredOptions =
    (tags && filteredOptions.filter((o) => !tags.includes(o.title))) ||
    filteredOptions;
  return (
    <Select
      showSearch
      mode="tags"
      placeholder="Inserted are removed"
      value={tags}
      onChange={handleChange}
      style={{ width: "100%" }}
    >
      {filteredOptions &&
        filteredOptions.map((item) => (
          <Select.Option key={item.title} value={item.title}>
            {item.title}
          </Select.Option>
        ))}
    </Select>
  );
};

const styles = (_theme) => ({
  siteTagPlus: {
    background: "#fff",
    borderStyle: "dashed",
  },
  editTag: {
    userSelect: "none",
  },
  tagInput: {
    width: "78px",
    marginRight: "8px",
    verticalAlign: "top",
  },
});
export default withStyles(styles)(SelectTag);
