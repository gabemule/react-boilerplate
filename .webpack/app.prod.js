const commonConfig = require("./app.common");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const prodConfig = {
  mode: "production",
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      "...",
      new CssMinimizerPlugin(),
    ],
  },
  devtool: "hidden-source-map"
};

module.exports = Object.assign(commonConfig, prodConfig);
