const path = require("path");
const base = require("./webpack.config.base.js");

module.exports = {
  //base的所有属性放到这里
  ...base,

  mode: "development",

  //使用dev-server
  devServer: {
    contentBase: "./dist",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
