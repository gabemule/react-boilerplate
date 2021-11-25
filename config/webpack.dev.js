const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 9007,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  devtool: 'hidden-source-map'
};

module.exports = Object.assign(commonConfig, devConfig);
