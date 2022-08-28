const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPkgJsonPlugin = require("copy-pkg-json-webpack-plugin")

const pkg = require('../package.json');

module.exports = {
  resolve: {
    extensions: [".jsx", ".js", ".json", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  externals: {
    react: "react",
    reactDom: "react-dom"
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
                  autoprefixer
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
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    new CopyPkgJsonPlugin({
      new: {
        name: pkg.name,
        version: pkg.version,
        main: "main.js",
        peerDependencies: pkg.peerDependencies
      }
    })
  ]
};
