import React from "react";
import groupBy from "lodash/groupBy";
import filter from "lodash/filter";
import sortBy from "lodash/sortBy";
import includes from "lodash/includes";
import { Components as odsCore } from "@origin-digital/ods-core";
import * as odsLab from "@origin-digital/ods-lab";
import { Components as odsPickers } from "@origin-digital/ods-pickers";
import * as odsIcons from "@origin-digital/ods-icons";

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
  )
  .concat(
    Object.keys(odsPickers).map((componentName) => ({
      componentName,
      packageName: "ods-pickers",
    }))
  )
  .concat(
    Object.keys(odsIcons).map((componentName) => ({
      componentName,
      packageName: "ods-icons",
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
  ...convertArrayToObject(odsLab, "ods-lab"),
  ...convertArrayToObject(odsIcons, "ods-icons"),
  ...convertArrayToObject(odsCore, "ods-core"),
  ...convertArrayToObject(odsPickers, "ods-pickers"),
};
const SVGIcon = odsIcons.SvgIcon;
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
    if (componentName.startsWith("Icon")) {
      const Icon = (odsIcons as any)[componentName] as typeof SVGIcon;
      const {
        propDescriptions,
      } = require(`../../../packages/ods-icons/src/SvgIcon/SvgIcon.docs.tsx`).docs;
      docs = {
        category: "Unknown",
        propDescriptions,
        componentName,
        examples: {
          default: { Code: () => <Icon /> },
          additional: [
            {
              label: "Medium Size Icon",
              Code: () => <Icon size="medium" />,
            },
            {
              label: "Large Size Icon",
              Code: () => <Icon size="large" />,
            },
            {
              label: "Setting the icon colour",
              Code: () => <Icon tone="critical" />,
            },
          ],
        },
        snippets: [],
      };
    } else {
      docs = {
        category: "Unknown",
        componentName,
        examples: { default: {}, additional: [] },
        snippets: [],
      };
    }
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

export function filterByIcon(name: string) {
  if (name.startsWith("Icon") && name !== "IconButton") {
    return false;
  }
  return true;
}

const categorisedComponents = groupBy(
  componentPaths
    .filter(({ name }) => filterByIcon(name))
    .map(({ name }) => {
      const docs: ComponentDocs = getComponentDocs({
        componentName: name,
      });
      return { name, ...docs };
    })
    .sort((a, b) => (a.name > b.name ? 1 : -1)),
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
