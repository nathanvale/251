const path = require("path");

const getPackagesMetaData = require("../packages/ods-scripts/src/packages-metadata")
  .getPackagesMetaData;
const getResolveAliases = require("../packages/ods-scripts/src/packages-metadata")
  .getResolveAliases;

const packagesMetadata = getPackagesMetaData();

module.exports = {
  cwd: path.join(__dirname, "../"),
  components: "playroom/src/playroom-components.ts",
  frameComponent: "playroom/src/playroom-entry.tsx",
  snippets: "playroom/src/playroom-snippets.ts",
  outputPath: "./playroom/dist",
  port: 9999,
  widths: [375, 667, 768, 1024, 1440],
  openBrowser: false,
  exampleCode: `<Section>
  <Placeholder />
</Section>`,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-typescript",
                "@babel/preset-react",
              ],
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      alias: getResolveAliases(packagesMetadata),
    },
  }),
};
