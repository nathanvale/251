import React from "react";
import { RouteProps } from "react-router";
import { E2ETests } from "@origin-digital/ods-types";
import { E2ETestPage } from "../../E2ETestPage/E2ETestPage";

const packages = ["ods-core", "ods-pickers"];

export const getE2ETests = ({ componentName }: { componentName: string }) => {
  let tests: E2ETests = [];
  for (const packageName of packages) {
    try {
      tests = require(`../../../../../packages/${packageName}/src/${componentName}/${componentName}.e2e.tsx`)
        .tests;
      break;
    } catch (error) {
      tests = [];
    }
  }

  return tests;
};

const page: RouteProps = {
  render: ({ match }) => (
    <E2ETestPage
      key={match.params.componentName} // Force remount per page to fix hooks errors when generating code snippets
      componentName={match.params.componentName}
      tests={getE2ETests({
        componentName: match.params.componentName,
      })}
    />
  ),
};

export default {
  "/e2e/:componentName": page,
};
