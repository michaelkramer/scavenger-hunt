const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: { main: path.resolve(__dirname, "src/views/index.tsx") },
  output: {
    path: path.resolve(__dirname, "dist/public"),
    filename: "assets/js/[name].js",//.[contenthash:8]
    //chunkFilename: 'assets/js/[name].bundle.js',
    publicPath: "/",
  },
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: [".js", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      //filename: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: './public/*[.png|.ico]', to: "../" },
      ],
    }),
  ],
  bail: true,
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty",
  },

  watchOptions: {
    poll: 1000,
    ignored: ["node_modules"],
  },
};
