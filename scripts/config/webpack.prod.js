/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PLUGINS = [
  new CopyWebpackPlugin({
    patterns: [
      { from: "public/images", to: "./images" },
      {
        from: "public/baidu_verify_codeva-mKvIqrFeTu.html",
        to: "./",
      },
    ],
  }),
  new CleanWebpackPlugin(),
];

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  plugins: PLUGINS,
});
