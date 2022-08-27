const coreConfig = require("./lib.core");
const prodConfig = require("./lib.prod");

module.exports = Object.assign(coreConfig, prodConfig);
