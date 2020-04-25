const baseConfig = require("./webpack.config");
const path = require("path");

// Note that since this is for the server, it is important to
// set the target to node and set the libraryTarget to commonjs2
module.exports = Object.assign(
  {},
  {
    target: "node",
    entry: "./views/Server.tsx",
    output: {
      filename: "server.bundle.js",
      path: path.resolve(__dirname, "./lib"),
      libraryTarget: "commonjs2",
    },
  },
  baseConfig,
);
