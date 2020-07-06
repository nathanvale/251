const path = require("path");

const ignores = [
  "/node_modules/",
  "/fixtures/",
  "/__tests__/helpers/",
  "__mocks__",
  "dist",
];

module.exports = {
  testPathIgnorePatterns: [...ignores],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  testRegex: "^.+\\.test\\.(ts|tsx|js|jsx)$",
  moduleNameMapper: {
    "@origin-digital/((?!style-guide|reporting-client|event-dispatcher)[^/]*)$":
      "<rootDir>../$1/src",
  },
};
