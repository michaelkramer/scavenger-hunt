import { Response } from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import template from "./template";
import ServerApp from "../../server.bundle.js";

// React App
// const ServerApp = React.createFactory(
//   require("../../server.bundle").default,
// );
function render(MyComponent: any) {
  return React.createElement(MyComponent, { foo: "bar" });
}
// Helper function to get the markup from React, inject the initial state, and
// send the server-side markup to the client
const renderApplication = (url: any, res: Response, initialState: any) => {
  const html = ReactDOMServer.renderToString(
    // @ts-ignore
    render(ServerApp, {
      url: url,
      context: {},
      initialState,
    }),
    //ServerApp({ url: url, context: {}, initialState }),
  );
  const templatedHtml = template({
    body: html,
    initialState: JSON.stringify(initialState),
  });
  res.send(templatedHtml);
};

export default renderApplication;
