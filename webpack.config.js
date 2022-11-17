// const HtmlWebpackPlugin = require("html-webpack-plugin");
// // HtmlWebpackPlugin generates index.html from a template

// const path = require("path");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  mode: "development",
  entry: "./src/index.tsx",
  target: "web",
  devServer: {
    port: "3000",
    static: "./public",
    liveReload: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-javascript"],
          },
        },
      },
    ],
  },
};
