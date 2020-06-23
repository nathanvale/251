module.exports = {
  overrides: [
    {
      files: ["src/mui/!(index)*.ts"],
      rules: {
        "import/newline-after-import": "off",
        "import/no-default-export": "off",
      },
    },
  ],
};
