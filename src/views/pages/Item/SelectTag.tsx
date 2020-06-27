import React, { useState } from "react";
import { Styles } from "../../theme/Style";
import { Select } from "antd";

const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];

interface $Props {
  value: Array<string>;
  onChange: Function;
}

interface InputProps {
  value?: Array<string>;
  onChange?: (value: Array<string>) => void;
}

const SelectTag = ({ value, onChange }: $Props) => {
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

  const filteredOptions = OPTIONS; //.filter(o => !tags.includes(o));
  return (
    <Select
      showSearch
      mode="tags"
      placeholder="Inserted are removed"
      value={tags}
      onChange={handleChange}
      style={{ width: "100%" }}
    >
      {filteredOptions.map((item) => (
        <Select.Option key={item} value={item}>
          {item}
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
export default Styles(styles)(SelectTag);
