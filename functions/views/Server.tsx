import React from "react";
import { StaticRouter } from "react-router";
import App from "./App";

export default class ServerApp extends React.Component {
  render() {
    return (
      // @ts-ignore
      <StaticRouter location={this.props.url} context={this.props.context}>
        // @ts-ignore
        <App state={this.props.initialState} />
      </StaticRouter>
    );
  }
}
