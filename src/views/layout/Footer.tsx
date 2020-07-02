import React from "react";
import PropTypes from "prop-types";
import Text from "antd/lib/typography/Text";
import { withStyles } from "../theme/Style";

const Footer = ({ classes }) => {
  return <Text>This is the footer</Text>;
};

Footer.propTypes = {
  classes: PropTypes.any,
};

const styles = (_theme) => ({});
export default withStyles(styles)(Footer);
