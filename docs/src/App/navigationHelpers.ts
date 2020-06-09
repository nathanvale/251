import groupBy from "lodash/groupBy";
import filter from "lodash/filter";
import sortBy from "lodash/sortBy";
import includes from "lodash/includes";
import * as odsCore from "@origin-digital/ods-core";
import * as odsLab from "@origin-digital/ods-lab";
import { ComponentDocs } from "@origin-digital/ods-types";

/**
 * We create an array of objects of components that describe where they came
 * from so we can scan for any duplicates.
 */
const components = Object.keys(odsCore)
  .map((componentName) => ({
    componentName,
    packageName: "ods-core",
  }))
  .concat(
    Object.keys(odsLab).map((componentName) => ({
      componentName,
      packageName: "ods-lab",
    }))
  );
const duplicates = filter(
  components.map((component) => component.componentName),
  (value, index, iteratee) => includes(iteratee, value, index + 1)
);
if (duplicates.length > 0) {
  throw new Error(
    `Duplicate component names found: ${duplicates}. For documentation purposes component names must be unique.`
  );
}

/**
 * Convert our array of component names and create a map to their package name.
 * @param module
 * @param packageName
 */
const convertArrayToObject = (module: any, packageName: string) => {
  const initialValue = {};
  const array = Object.keys(module);
  return array.reduce((obj, componentName) => {
    return {
      ...obj,
      [componentName]: packageName,
    };
  }, initialValue);
};
const componentsMap: Record<string, string> = {
  ...convertArrayToObject(odsCore, "ods-core"),
  ...convertArrayToObject(odsLab, "ods-lab"),
};

export const getComponentDocs = ({
  componentName,
}: {
  componentName: string;
}) => {
  let docs: ComponentDocs;
  const packageName = componentsMap[componentName];
  try {
    docs = require(`../../../packages/${packageName}/src/${componentName}/${componentName}.docs.tsx`)
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

const componentPaths = Object.keys(componentsMap).map((componentName) => ({
  name: componentName,
  packageName: componentsMap[componentName],
}));

const allComponents = componentPaths
  .map(({ name }) => {
    const docs: ComponentDocs = getComponentDocs({
      componentName: name,
    });
    return { name, ...docs };
  })
  .filter((docs) => docs.category !== "Unknown")
  .map((docs) => docs.name);

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
  return sortBy(allComponents);
}

export function getComponentPackage(componentName: string) {
  return componentsMap[componentName];
}
