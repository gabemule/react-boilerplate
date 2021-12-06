const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPkgJsonPlugin = require("copy-pkg-json-webpack-plugin")

const pkg = require('../package.json');

module.exports = {
  entry: "./src/bundle.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    },
  },
  externals: {
    react: "react",
    reactDom: "react-dom"
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
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { sourceMap: true  } },
          { loader: "postcss-loader",
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
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader"
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
        description: pkg.description,
        main: "main.js",
        author: pkg.author,
        repository: pkg.repository,
        peerDependencies: pkg.peerDependencies
      }
    })
  ]
};
