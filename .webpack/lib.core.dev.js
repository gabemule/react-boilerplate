const coreConfig = require("./lib.core");
const devConfig = require("./lib.dev");

module.exports = Object.assign(coreConfig, devConfig);
