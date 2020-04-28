const path = require("path");
const globalCssLoaders = [
  {
    loader: "css-loader",
    options: {
      sourceMap: true,
    },
  },
];
const cssLoaders = [
  {
    loader: "css-loader",
    options: {
      modules: true,
      importLoaders: 2,
      sourceMap: true,
      localIdentName: "[name]__[local]___[hash:base64:5]",
    },
  },
  {
    loader: "sass-loader",
    options: {
      sourceMap: true,
    },
  },
  {
    loader: "postcss-loader",
  },
];

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "firebase-database": path.resolve(
        __dirname,
        "../functions/firebase-database",
      ),
    },
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, "./node_modules")],
  },
  watch: true,
  watchOptions: {
    poll: 1000,
    ignored: ["node_modules"],
  },
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
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          ...cssLoaders,
        ],
      },
      {
        test: /node_modules\/.*\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          ...globalCssLoaders,
        ],
      },
    ],
  },
};
