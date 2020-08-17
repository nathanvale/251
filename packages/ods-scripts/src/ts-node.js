const tsConfigPaths = require("tsconfig-paths");
const tsConfig = require("../tsconfig.json");

const baseUrl = "."; // Either absolute or relative path. If relative it's resolved to current working directory.
const cleanup = tsConfigPaths.register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths,
});

require("source-map-support").install();
require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "es2017",
  },
});
exports.createPages = require("./create-code-snippets");
