const path = require("path");
const autoprefixer = require("autoprefixer");
const postcssSVG = require('postcss-svg');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    core: path.resolve(__dirname, "../src/styles/index.scss"),
    digital: path.resolve(__dirname, "../src/styles/themes/digital/index.scss"),
    bees: path.resolve(__dirname, "../src/styles/themes/bees/index.scss")
  },
  output: {
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
    filename: "[name]-theme.js",
    path: path.resolve(__dirname, "../dist/themes"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        coreStyles: {
          type: "css/mini-extract",
          name: "core-theme",
          chunks: (chunk) => {
            return chunk.name === "core";
          },
          enforce: true,
        },
        digitalStyles: {
          type: "css/mini-extract",
          name: "digital-theme",
          chunks: (chunk) => {
            return chunk.name === "digital";
          },
          enforce: true,
        },
        beesStyles: {
          type: "css/mini-extract",
          name: "bees-theme",
          chunks: (chunk) => {
            return chunk.name === "bees";
          },
          enforce: true,
        },
      },
    },
    moduleIds: 'deterministic',
    minimizer: [
      "...",
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
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
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].[contenthash].css",
    })
  ]
};
