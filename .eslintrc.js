const { spawnSync } = require("child_process");

const result = spawnSync(
  "./node_modules/lerna/cli.js",
  ["ls", "--parseable", "--all"],
  {
    stdio: "pipe",
    encoding: "utf-8",
  }
);
const packages = result.stdout.split("\n").filter((package) => package !== "");

module.exports = {
  extends:
    "./node_modules/@origin-digital/origin-scripts/dist/config/eslintrc.js",
  rules: {
    "import/no-default-export": "error",
    "jest/require-top-level-describe": "off",
    "jest/no-empty-title": "off",
    "react/prop-types": "off",
    "no-bitwise": "off",
    "babel/new-cap": "off",
    "babel/quotes": "off",
    "no-negated-condition": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "max-lines-per-function": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/extensions": "off",
    "prefer-rest-params": "off",
    "valid-jsdoc": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: [".", ...packages, "docs", "playroom"],
      },
    ],
  },
  globals: {
    __DEV__: true,
    spyOn: true,
  },
};
