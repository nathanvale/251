import groupBy from "lodash/groupBy";
import * as odsCore from "@origin-digital/ods-core";
import { ComponentDocs } from "@origin-digital/ods-types";

export const getComponentDocs = ({
  componentName,
}: {
  componentName: string;
}) => {
  let docs: ComponentDocs;
  try {
    docs = require(`../../../packages/ods-core/src/${componentName}/${componentName}.docs.tsx`)
      .docs;
  } catch (error) {
    docs = {
      category: "Unknown",
      componentName,
      examples: { default: {}, additional: [] },
      snippets: [],
    };
  }

  return docs;
};

function getDocPaths(module: any, packageName: string) {
  return Object.keys(module).map((name) => ({
    name,
    packageName,
  }));
}

const componentPaths = [...getDocPaths(odsCore, "ods-core")];

const allComponents = Object.keys(odsCore);

const categorisedComponents = groupBy(
  componentPaths.map(({ name }) => {
    const docs: ComponentDocs = getComponentDocs({
      componentName: name,
    });
    return { name, ...docs };
  }),
  (component) => component.category
);

export function getCategorisedComponents() {
  return categorisedComponents;
}

export function getAllComponents() {
  return allComponents;
}
