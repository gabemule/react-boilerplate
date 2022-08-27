const path = require("path");
const autoprefixer = require("autoprefixer");
const postcssSVG = require('postcss-svg');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/app/app.tsx",
  output: {
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../app-build"),
  },
  resolve: {
    extensions: [".jsx", ".js", ".json", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "@gabemule/design-system": path.resolve(__dirname, "../dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(j)s$|(j)sx/,
        loader: "babel-loader"
      },
      {
        test: /\.(t)s$|(t)sx/,
        loader: "ts-loader"
      },
      {
        test: /\.(css|s[c|a]ss)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer,
                  postcssSVG
                ],
              },
            }
          },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    })
  ]
};
