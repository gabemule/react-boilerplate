const commonConfig = require("./app.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 9007,
    historyApiFallback: true
  },
  devtool: "eval-source-map"
};

module.exports = Object.assign(commonConfig, devConfig);
