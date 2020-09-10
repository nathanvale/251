<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

-   [TestCafe visual tests version](#testcafe-visual-tests-version)
    -   [Structure](#structure)
    -   [Running specs/tests](#running-specstests)
    -   [`.testcaferc.json` file example](#testcafercjson-file-example)
    -   [Applitools setup and run](#applitools-setup-and-run)
    -   [`.applitools.config.js` file example](#applitoolsconfigjs-file-example)
    -   [Applitools branching](#applitools-branching)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# TestCafe visual tests version

This will be supplemented by overall information and instructions as development goes

## Structure

-   `Specs` - folder contains specs (tests/specs)
-   `Utils` - folder contains useful functions for writing tests (tests/utils)
-   `Pages` - folder contains page-object (tests/pages)
-   `.testcaferc.json` - file used for configuring TestCafe
-   `.applitools.config.js` - file used for configuring applitools. (/tests)
-   `e2e-manifest.json` - tests uses data from this file (/docs/build). This is created programmatically at the docs build time.

## Running specs/tests

Everything needed for testcafe to work is in package.json, thus:

1. Install: under `/` folder do `yarn install`
2. Build docs and start the server `yarn docs:build:serve:static`
3. To run visual tests in local Chrome cd to `tests` and `testcafe:chrome`
4. To run the tests in CI mode do `make test/visuals` at the root

## `.testcaferc.json` file example

-   This file should be located at ./docs/tests
-   `browsers` options can be set as `["all"]` to run tests on every browser installed locally
-   `concurrency` is how many browser instances should testcafe use concurrently

-   More at https://devexpress.github.io/testcafe/documentation/using-testcafe/configuration-file.html

```
{
  "browsers": ["chrome"],
  "quarantineMode": false,
  "skipJsErrors": true,
  "skipUncaughtErrors": true,
  "concurrency": 1,
  "selectorTimeout": 10000,
  "assertionTimeout": 10000,
  "pageLoadTimeout": 22500,
  "speed": 1,
  "tsConfigPath": "./tsconfig.json"
}
```

## Applitools setup and run

1.  `export APPLITOOLS_API_KEY=yourApiKey`
2.  All the browsers(including break points) are listed in `./tests/utils/ApplitoolsHelper`
3.  Change `src` or add `filter` in `.testcaferc.json` to run `ApplitoolsSpec.ts`
4.  Test for Applitools are in `./tests/specs/ApplitoolsSpec` and Test uses data in `./docs/build/e2e-manifest.json`

## `.applitools.config.js` file example

-   This file should be located at ./tests
-   `browsers` options can be set as `["all"]` to run tests on every browser installed locally
-   `concurrency` is how many browser instances should testcafe use concurrently
-   `saveNewTests` if false, test would faile for every new tests, we have to approve the test using applitools UI

-   More at https://applitools.com/tutorials/testcafe.html
-   Git repo https://github.com/applitools/eyes-testcafe

```
{
  serverUrl: "https://origineyesapi.applitools.com",
  showLogs: false,
  concurrency: 10,
  saveNewTests: false
}

```

## Applitools branching

TARGET BRANCH: Origin Design System*master (master branch in applitools)
SOURCE BRANCH: Origin Design System*{git_branch} (new branch is applitools)

For Merging new screenshot you can you the following like and merge new screenshot into master
https://origineyes.applitools.com/app/merge/?accountId=v0d2mmYmaEGMBg6ZfnRYCw~~
