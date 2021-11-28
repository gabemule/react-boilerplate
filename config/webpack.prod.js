const path = require("path");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  devtool: "hidden-source-map"
};

module.exports = Object.assign(commonConfig, prodConfig);
