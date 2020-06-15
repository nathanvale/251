module.exports = {
  extends: "../.eslintrc.js",
  rules: {
    "jest/require-top-level-describe": "off",
    "jest/expect-expect": "off",
    "no-console": 1,
    "no-require-imports": true,
    "@typescript-eslint/no-var-requires": 0,
  },
};
