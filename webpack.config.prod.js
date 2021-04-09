const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    publicPath: "",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js/,
        exclude: /node_module/,
        use: ["babel-loader"],
      },
      {
        test: /\.worker\.js$/,
        use: { loader: "worker-loader" },
      },
      {
        test: /\.(jpg|png)$/,
        include: path.join(__dirname, "src/assets"),
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "./index.html",
      favicon: false,
      showErrors: true,
      cache: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: "./.env.development",
    }),
  ],
  devtool: "eval-source-map",
  performance: {
    hints: "warning",
  },
};
