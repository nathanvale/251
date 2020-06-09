const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require("webpack");
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
  typeScriptFiles: [
    "packages/ods-core/src/**/*.{ts,tsx}",
    "packages/ods-lab/src/**/*.{ts,tsx}",
    "packages/ods-types/src/**/*.{ts,tsx}",
    "packages/ods-icons/src/**/*.{ts,tsx}",
    /**
     * We are pointing Heading here for autocomplete in playroonm
     * because of the type intersection we have in core HeadingProps.
     * Weight prop doesn't exist on the interface unless it is in
     * a variant conditional so we have to force playroom to look at a
     * faux type instead.
     */
    "playroom/src/_private/components/Heading/Heading.tsx",
    "!packages/ods-core/src/Heading/Heading.tsx",
    "!**/node_modules",
  ],
  exampleCode: `<Section>
  <Placeholder />
</Section>
`,
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
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      alias: getResolveAliases(packagesMetadata),
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      }),
    ],
  }),
};
