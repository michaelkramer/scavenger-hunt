const path = require("path");

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
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
