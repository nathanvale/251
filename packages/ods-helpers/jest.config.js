const base = require("../../jest.settings.js");
const pack = require("./package.json");

module.exports = {
  ...base,
  displayName: pack.name,
  name: pack.name,
  setupFilesAfterEnv: ["<rootDir>/../ods-testing-library/jest-setup.js"],
  globals: {
    __DEV__: true,
  },
};
