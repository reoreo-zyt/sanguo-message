/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require("path");
const { PROJECT_PATH, isDev } = require("../constants");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PLUGINS = [
  // 配置html，自动引入打包出的js文件
  new HtmlWebpackPlugin({
    template: resolve(PROJECT_PATH, "./public/index.html"),
    filename: "index.html",
    cache: false,
    minify: isDev
      ? false
      : {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
          collapseBooleanAttributes: true,
          collapseInlineTagWhitespace: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
          useShortDoctype: true,
        },
  }),
];

const getCssLoaders = () => ["style-loader", "css-loader", "postcss-loader"];

module.exports = {
  mode: isDev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getCssLoaders(),
      },
      {
        test: /\.scss$/,
        use: [
          ...getCssLoaders(),
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      // 处理图片、文件、字体
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
      {
        // 通用文件则使用 asset，此时会按照默认条件自动决定是否转换为 Data URI
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset",
        parser: {
          // 如果文件大小小于 8kb，那么会转换为 data URI，否则为单独文件。
          // 8kb 是默认值，你可以根据需要进行调整
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb
          },
        },
      },
      {
        test: /\.(tsx?|js)$/,
        loader: "babel-loader",
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
    ],
  },
  entry: {
    app: resolve(PROJECT_PATH, "./src/index.tsx"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      "@src": resolve(PROJECT_PATH, "./src"),
      "@components": resolve(PROJECT_PATH, "./src/components"),
      "@utils": resolve(PROJECT_PATH, "./src/utils"),
    },
  },
  output: {
    filename: `js/[name]${isDev ? "" : ".[hash:8]"}.js`, // 开发模式不需要 hash 值
    path: resolve(__dirname, "../../dist"),
  },
  plugins: PLUGINS,
};
