const base = require("../../jest.settings.js");
const pack = require("./package.json");

module.exports = {
  ...base,
  displayName: pack.name,
  setupFilesAfterEnv: ["<rootDir>/../ods-testing-library/jest-setup.js"],
  name: pack.name,
  globals: {
    __DEV__: true,
    __PLAYROOM__: true,
  },
};
