const path = require('path');
const getPackagesMetaData = require('../packages/ods-scripts/src/packages-metadata')
  .getPackagesMetaData;
const getResolveAliases = require('../packages/ods-scripts/src/packages-metadata')
  .getResolveAliases;

const packagesMetadata = getPackagesMetaData();

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({
          webpackConfig,
          cracoConfig,
          pluginOptions,
          context: {env, paths},
        }) => {
          //Remove ModuleScope plugin so babel can access packages
          webpackConfig.resolve.plugins.pop();
          //babel-loader
          webpackConfig.module.rules[2].oneOf[1].include = [
            path.resolve(__dirname, 'src'),
            // Allow babel-loader to include src code for packages
            ...packagesMetadata.map(package => `${package.location}/src`),
          ];
          return webpackConfig;
        },
      },
      options: {},
    },
  ],
  webpack: {
    // Set aliases of package names to their source folders
    alias: getResolveAliases(packagesMetadata),
  },
};
