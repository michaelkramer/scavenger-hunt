const baseConfig = require("./webpack.config");
const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const entry = { Server: "./views/Server.tsx" };
//const files = glob.sync("./views/**/*.{ts,js,tsx}");

// files.forEach((file) => {
//   const splitFile = file.split("/");
//   //console.log("==>", splitFile);
//   try {
//     const arr = [];
//     if (file.includes("layout")) {
//       arr.push("@babel/polyfill");
//     }
//     arr.push(path.join(__dirname, "/", file));
//     const fileName = splitFile[splitFile.length - 1]
//       .replace(".tsx", "")
//       .replace(".ts", "");
//     entry[fileName] = arr;
//   } catch (err) {
//     console.error(err); // eslint-disable-line
//   }
// });

//console.log("==>", entry);
// Note that since this is for the server, it is important to
// set the target to node and set the libraryTarget to commonjs2
module.exports = Object.assign(
  {},
  {
    target: "web",
    entry,
    output: {
      filename: "[name].js", // [name] is the key of the entry point up above
      //chunkFilename: "[name].[chunkhash:8].chunk.js",
      path: path.resolve(__dirname, "../public/views"),
      publicPath: "/",
      //libraryTarget: "commonjs2",
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
    //   new EmitAllPlugin({
    //     ignorePattern: /node_modules/, // default,
    //     //path: path.join(__dirname, "../unbundled-out"), // defaults to `output.path`
    //   }),
    // ],
    devtool: "source-map",
    optimization: {
      //minimize: false,
      splitChunks: {
        //chunks: "all",
      },
    },
  },
  baseConfig,
);
