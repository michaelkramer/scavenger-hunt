import React, { useState, useEffect } from "react";
import ApiRequest from "../../common/apiRequest";
import { withStyles } from "../../theme/Style";
import EditItem from "./EditItem";
//import { $ReactBaseProps } from "../../../types";

interface $Props extends React.Props<any> {
  classes: any;
  id: string;
}

const Item: React.FC<$Props> = ({ id }: $Props) => {
  const [values, setValues] = useState();
  const [tagOptions, setTagOptions] = useState();

  async function fetchItem() {
    if (id) {
      const values = await ApiRequest(`/api/items/${id}`);
      if (values.data) {
        setValues(values.data);
      }
    }
    const tags = await ApiRequest(`/api/tags`);
    if (tags.data) {
      setTagOptions(tags.data);
    }
  }

  useEffect(() => {
    fetchItem();
    return () => {};
  }, [id]);

  return <EditItem id={id} values={values} tagOptions={tagOptions} />;
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

export default withStyles(styles)(Item);
