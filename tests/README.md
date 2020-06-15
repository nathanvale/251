<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

-   [TestCafe visual tests version](#testcafe-visual-tests-version)
    -   [Structure](#structure)
    -   [Running specs/tests](#running-specstests)
    -   [`.testcaferc.json` file example](#testcafercjson-file-example)
    -   [Using browserstack to run tests](#using-browserstack-to-run-tests)
    -   [Applitools setup and run](#applitools-setup-and-run)
    -   [`.applitools.config.js` file example](#applitoolsconfigjs-file-example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# TestCafe visual tests version

This will be supplemented by overall information and instructions as development goes

## Structure

-   `Specs` - folder contains specs (docs/tests/specs)
-   `Utils` - folder contains useful functions for writing tests (docs/tests/utils)
-   `Pages` - folder contains page-object (docs/tests/pages)
-   `.testcaferc.json` - file used for configuring TestCafe
-   `.applitools.config.js` - file used for configuring applitools. This is at the root (/)
-   `e2e-manifest.json` - tests uses data from this file (/docs/public). This is created programmatically at the docs build time.

## Running specs/tests

Everything needed for testcafe to work is in package.json, thus:

1. Install: under `/` folder do `yarn install`
2. Build docs and start the server `yarn docs:build:serve:static`
3. To run visual tests in local Chrome `testcafe:chrome`
4. To run visual tests using applitools `test:func:applitools` (This would use browser from browserstack to capture visuals for applitool)

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

## Using browserstack to run tests

1. Set environment variables `BROWSERSTACK_USER` and `BROWSERSTACK_ACCESSKEY`
2. Change `browsers` in `.testcaferc.json` to an array of preferred browserstack browsers. To see available browser aliases type `testcafe -b browserstack` command in terminal
3. Run with `yarn testcafe:browserstack` command in terminal from `/client` folder

## Applitools setup and run

1.  `export APPLITOOLS_API_KEY=yourApiKey`
2.  All the browsers(including break points) are listed in `./docs/tests/utils/ApplitoolsHelper`
3.  Change `src` or add `filter` in `.testcaferc.json` to run `ApplitoolsSpec.ts`
4.  Test for Applitools are in `./docs/tests/specs/ApplitoolsSpec` and Test uses data in `./docs/public/e2e-manifest.json`
5.  Run with `yarn testcafe:applitools` command in terminal from `/` folder. (This would use browser from browserstack to capture visuals for applitool)

## `.applitools.config.js` file example

-   This file should be located at ./
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
