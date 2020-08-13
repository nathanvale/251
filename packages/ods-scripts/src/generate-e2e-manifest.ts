import fs from "fs";
import path from "path";
import { E2ETests } from "@origin-digital/ods-types";
import { Components as odsCore } from "@origin-digital/ods-core";
import { Components as odsPickers } from "@origin-digital/ods-pickers";
import { slugify } from "@origin-digital/ods-helpers";
import { FC } from "react";

function getE2ETests(componentName: string, packageName: string) {
  let tests: E2ETests;
  try {
    tests = require(`../../${packageName}/src/${componentName}/${componentName}.e2e.tsx`)
      .tests;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`WARNING MISSING E2E TEST: ${error.message}`);
    tests = [];
  }
  return tests;
}

const mapComponentTests = (
  componentName: string,
  components: any,
  packageName: string
) => {
  const tests = getE2ETests(componentName, packageName);
  const component = (components as Record<string, FC<any>>)[componentName];
  const dataId =
    component?.defaultProps?.["data-id"] ??
    component.displayName?.toLowerCase();

  if (tests.length > 0) {
    if (typeof dataId === "undefined")
      throw new Error(
        `Missing data-id in component ${componentName}.defaultProps`
      );
    if (typeof dataId !== "string") {
      throw new Error(
        `data-id in component ${componentName}.defaultProps must be a string`
      );
    }
  }
  return {
    componentName,
    packageName,
    dataId,
    paths: tests.map(({ label, responsive }) => ({
      label: `/e2e/${componentName}/${slugify(label)}`,
      responsive: Boolean(responsive),
    })),
  };
};

const getAppliTests = (components: any, packageName: string) =>
  Object.keys(components)
    .map((compName) => mapComponentTests(compName, components, packageName))
    .filter((components) => components.paths.length > 0);

const coreAppliTests = getAppliTests(odsCore, "ods-core");
const pickerAppliTests = getAppliTests(odsPickers, "ods-pickers");
const appliTests = [...pickerAppliTests, ...coreAppliTests];

fs.writeFileSync(
  path.join(__dirname, "../../../docs/public/e2e-manifest.json"),
  JSON.stringify(appliTests, null, 2),
  "utf8"
);
