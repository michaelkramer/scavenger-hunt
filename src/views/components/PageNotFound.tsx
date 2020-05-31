import React from "react";
import { Styles } from "../theme/Style";

const PageNotFound = ({ classes }) => {
  return <div>Page not found</div>;
};

const styles = (_theme) => ({
  layout: {
    color: "white",
  },
  container: {
    color: "#f00",
    padding: "20px",
  },
});
export default Styles(styles)(PageNotFound);
