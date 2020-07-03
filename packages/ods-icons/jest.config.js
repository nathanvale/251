const base = require("../../jest.settings.js");
const pack = require("./package.json");

module.exports = {
  ...base,
  coveragePathIgnorePatterns: ["/ods-icons/src/custom/", "/ods-icons/src/mui/"],
  displayName: pack.name,
  name: pack.name,
  globals: {
    __DEV__: true,
  },
};
