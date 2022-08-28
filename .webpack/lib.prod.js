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

module.exports = prodConfig;
