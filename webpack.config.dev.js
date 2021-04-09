const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src", "index.js"),
  },
  devServer: {
    open: "chrome",
    port: 3000,
    hot: true,
    watchContentBase: true,
    progress: true,
    compress: true,
    contentBase: path.join(__dirname, "dist"),
  },
  mode: "development",
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
    new webpack.HotModuleReplacementPlugin(),
    // new Dotenv({
    //   path: "./.env.development",
    // }),
  ],
  devtool: "eval-source-map",
};
