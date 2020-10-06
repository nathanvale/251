const { spawnSync } = require("child_process");

/**
 * Returns metadata for the monorepos packages. eg:
 * [ { name: '@origin-digital/ods-core',
    version: '1.0.0',
    private: false,
    location: '/Users/nathanvale/code/origin-ui/packages/ods-core' },
  { name: '@origin-digital/ods-icons',
    version: '1.0.0',
    private: false,
    location: '/Users/nathanvale/code/origin-ui/packages/ods-icons' }
   ]
 */
function getPackagesMetaData() {
  const result = spawnSync(
    "../node_modules/lerna/cli.js",
    ["ls", "--parseable", "--ndjson", "--all"],
    {
      stdio: "pipe",
      encoding: "utf-8",
    }
  );

  const packagesMetadata = result.stdout
    .split("\n")
    .filter((pkg) => pkg !== "")
    .map((pkg) => JSON.parse(pkg));

  return packagesMetadata;
}

/**
 * Returns aliases for webpack resolve.alias
 * { 
    '@origin-digital/ods-core': '/Users/nathanvale/code/origin-ui/packages/ods-core/src',
    '@origin-digital/ods-icons': '/Users/nathanvale/code/origin-ui/packages/ods-icons/src',
    '@origin-digital/ods-patterns': '/Users/nathanvale/code/origin-ui/packages/ods-patterns/src' 
  }
 * @param {*} packagesMetadata 
 */
function getResolveAliases(packagesMetadata) {
  return packagesMetadata.reduce(
    (previousValue, currentValue, currentIndex, array) => {
      const pkg = array[currentIndex];
      return { ...previousValue, [pkg.name]: `${pkg.location}/src` };
    },
    {}
  );
}

module.exports = { getPackagesMetaData, getResolveAliases };
