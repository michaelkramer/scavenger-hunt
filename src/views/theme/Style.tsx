import React, { createContext } from "react";
import withReactwithStyles from "react-jss";
import { themeConfig } from "./theme";

const context = createContext(null);

const StyleProvider = ({ children }: { children: any }) => (
  <context.Provider value={{ theme: themeConfig }}>{children}</context.Provider>
);

StyleProvider.context = context;

const withStyles = (styles) => (Component) =>
  withReactwithStyles(styles(themeConfig))(Component);

const Theme = themeConfig;

export { withStyles, StyleProvider, Theme };
