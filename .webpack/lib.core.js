const path = require("path");

const commonConfig = require("./lib.common");

const coreConfig = {
  entry: "./src/library/index.core.js",
  output: {
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
    filename: "[name].js",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "../dist"),
  }
};

module.exports = Object.assign(commonConfig, coreConfig);
