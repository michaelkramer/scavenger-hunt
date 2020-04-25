const baseConfig = require("./webpack.config");
const path = require("path");
const fs = require("fs");
const glob = require("glob");
const assign = require("lodash/assign");

let nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function (x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

const entry = {};
const files = glob.sync("./src/**/*.{ts,js}");

files.forEach((file) => {
  //const splitFile = file.split("/");
  try {
    // const arr = [];
    // if (file.includes("layout")) {
    //   arr.push("@babel/polyfill");
    // }
    // arr.push(path.join(__dirname, "/", file));
    entry[file.replace(".ts", "").replace("src/", "")] = file;
  } catch (err) {
    console.error(err); // eslint-disable-line
  }
});
//console.log("==>", entry);
// Note that since this is for the server, it is important to
// set the target to node and set the libraryTarget to commonjs2
module.exports = Object.assign(
  {},
  {
    target: "node",
    entry, //"./src/index.ts",
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "./lib"),
      libraryTarget: "commonjs2",
    },
    externals: assign({}, nodeModules, {
      "../../server.bundle.js": "../../server.bundle.js",
    }),
    optimization: {
      minimize: false,
    },
  },

  baseConfig,
);
