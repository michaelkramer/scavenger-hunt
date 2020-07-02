import React, { useState, useEffect, useRef, useContext } from "react";
import isEmpty from "lodash/isEmpty";
import { useQueryParams, A, navigate } from "hookrouter";
import { Table, Tag, Space, Input, Button } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import ApiRequest from "../../common/apiRequest";
import UserProvider from "../../contexts/UserProvider";
//import Authorization from "../../contexts/AuthProvider";
import { withStyles } from "../../theme/Style";

const condition = (authUser) => {
  console.log("condition", !isEmpty(authUser));
  return !isEmpty(authUser);
};

const Admin = (props) => {
  const [loading, setLoading] = useState(false);
  const { authorization, user } = useContext(UserProvider.context);
  //const { authorization } = useContext(AuthUserProvider.context);
  useEffect(() => {
    //   console.log("condition test");
    if (!authorization(condition)) {
      console.log("auth false");

      //navigate("/");
      //return null;
      //
    }
    setLoading(true);
    return () => {};
  }, [user]);
  // useEffect(() => {
  //   console.log("set loading");
  //   setLoading(authCondition);
  // }, [authCondition]);
  return loading ? <div>Somehting</div> : <div>Not something</div>;
};

const styles = (_theme) => ({
  layout: {
    color: "white",
  },
  container: {
    color: "#f00",
    padding: "20px",
  },
  addButton: { textAlign: "right", marginBottom: "8px" },
  padding: { padding: "0 4px" },
  formBox: { width: "400px" },
});

export default withStyles(styles)(Admin);
