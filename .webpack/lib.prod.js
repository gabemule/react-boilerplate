const commonConfig = require("./lib.common");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const prodConfig = {
  mode: "production",
  optimization: {
    moduleIds: 'deterministic',
    minimizer: [
      "...",
      new CssMinimizerPlugin(),
    ],
  },
  devtool: "hidden-source-map"
};

module.exports = Object.assign(commonConfig, prodConfig);
