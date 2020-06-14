import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

const SocialMediaLabel = {
  facebook: (
    <label>
      <FacebookOutlined />
      &nbsp;&nbsp;Facebook
    </label>
  ),
  google: (
    <label>
      <GoogleOutlined />
      &nbsp;&nbsp;Google
    </label>
  ),
  twitter: (
    <label>
      <TwitterOutlined />
      &nbsp;&nbsp;Twitter
    </label>
  ),
};

export default SocialMediaLabel;
