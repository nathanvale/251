module.exports = {
  overrides: [
    {
      files: ["src/mui/!(index)*.ts", "src/custom/!(index)*.tsx"],
      rules: {
        "import/newline-after-import": "off",
        "import/no-default-export": "off",
      },
    },
  ],
};
