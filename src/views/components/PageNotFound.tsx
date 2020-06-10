import React from "react";
import { Styles } from "../theme/Style";
import { $ReactBaseProps } from "../../types";

const PageNotFound = ({ classes }: $ReactBaseProps) => {
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
