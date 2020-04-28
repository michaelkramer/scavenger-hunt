import React from "react";
import ReactDOM from "react-dom";
//import { StaticRouter } from "react-router";
import App from "./App";

// type $Props = {
//   url: string;
//   context: any;
//   initialState: any;
// };

// export default class ServerApp extends React.Component<$Props> {
//   render() {
//     return (
//       <StaticRouter location={this.props.url} context={this.props.context}>
//         <App state={this.props.initialState} />
//       </StaticRouter>
//     );
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));
