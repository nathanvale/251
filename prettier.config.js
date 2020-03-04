const prettierConfig = require("@origin-digital/origin-scripts/dist/config/prettier.config");

module.exports = Object.assign(prettierConfig, {
  singleQuote: false,
  trailingComma: "all",
});
