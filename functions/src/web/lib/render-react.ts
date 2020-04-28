import { Response } from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import template from "./template";
// @ts-ignore
//import ServerApp from "./server.bundle";

// Helper function to get the markup from React, inject the initial state, and
// send the server-side markup to the client
const renderApplication = (url: any, res: Response, initialState: any) => {
  // const html = ReactDOMServer.renderToString(
  //   React.createElement(ServerApp, {
  //     url,
  //     context: {},
  //     initialState,
  //   }),
  // );
  const templatedHtml = template({
    body: "",
    initialState: JSON.stringify(initialState),
  });
  res.send(templatedHtml);
};

export default renderApplication;
