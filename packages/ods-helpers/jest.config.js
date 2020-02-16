const base = require("../../jest.settings.js");
const pack = require("./package.json");

module.exports = {
  ...base,
  displayName: pack.name,
  name: pack.name,
  globals: {
    __DEV__: true,
  },
};
