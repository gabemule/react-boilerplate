const commonConfig = require("./lib.common");

const devConfig = {
  mode: "development",
  devtool: "eval-source-map"
};

module.exports = Object.assign(commonConfig, devConfig);
