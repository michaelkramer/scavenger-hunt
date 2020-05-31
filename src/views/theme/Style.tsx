import React, { createContext } from "react";
import withStyles from "react-jss";
import { themeConfig } from "./theme";

const context = createContext(null);

const StyleProvider = ({ children }) => {
  return (
    <context.Provider value={{ theme: themeConfig }}>
      {children}
    </context.Provider>
  );
};

StyleProvider.context = context;

const Styles = (styles) => (Component) =>
  withStyles(styles(themeConfig))(Component);

export { Styles, StyleProvider };
