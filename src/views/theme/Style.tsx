import withStyles from "react-jss";
import { themeConfig } from "./theme";

const Styles = (styles) => (Component) =>
  withStyles(styles(themeConfig))(Component);

export default Styles;
