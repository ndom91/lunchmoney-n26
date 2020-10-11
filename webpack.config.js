const path = require("path");
const webpack = require("webpack");

const mode = process.env.NODE_ENV || "production";

module.exports = {
  context: __dirname,
  output: {
    filename: `worker.${mode}.js`,
    path: path.join(__dirname, "dist"),
  },
  mode,
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [],
  },
  node: {
    fs: "empty",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
};
