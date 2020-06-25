import fs from "fs";
import path from "path";
import { E2ETests } from "@origin-digital/ods-types";
import { Components as odsCore } from "@origin-digital/ods-core";
import { slugify } from "@origin-digital/ods-helpers";
import { FC } from "react";

function getE2ETests(componentName: string) {
  let tests: E2ETests;
  try {
    tests = require(`../../ods-core/src/${componentName}/${componentName}.e2e.tsx`)
      .tests;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`WARNING MISSING E2E TEST: ${error.message}`);
    tests = [];
  }
  return tests;
}
const components = Object.keys(odsCore);
const appliTests = components
  .map((componentName) => {
    const tests = getE2ETests(componentName);
    const component = (odsCore as Record<string, FC<any>>)[componentName];
    const dataId =
      component && component.defaultProps && component.defaultProps["data-id"];

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
      paths: tests.map(({ label, responsive }) => ({
        label: `/e2e/${componentName}/${slugify(label)}`,
        responsive: Boolean(responsive),
      })),
    };
  })
  .filter((components) => components.paths.length > 0);

fs.writeFileSync(
  path.join(__dirname, "../../../docs/public/e2e-manifest.json"),
  JSON.stringify(appliTests, null, 2),
  "utf8"
);
