const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    },
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(css|s[c|a]ss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ],
              },
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    })
  ]
};