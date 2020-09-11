import path from "path";
import fse from "fs-extra";
import { argv } from "yargs";

import prettier from "prettier/standalone";
import typescriptParser from "prettier/parser-typescript";
import reactElementToJSXString from "react-element-to-jsx-string";

import { Components as odsCore } from "@origin-digital/ods-core";
import * as odsLab from "@origin-digital/ods-lab";
import * as odsIcons from "@origin-digital/ods-icons";
import * as odsPickers from "@origin-digital/ods-pickers";
import { ComponentDocs } from "@origin-digital/ods-types";

const packagePath = process.cwd();
const buildPath = path.join(packagePath, "docs/src");

const compName2pkgName = (module: any, packageName: string) => {
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
  ...compName2pkgName(odsLab, "ods-lab"),
  ...compName2pkgName(odsIcons, "ods-icons"),
  ...compName2pkgName(odsCore, "ods-core"),
  ...compName2pkgName(odsPickers, "ods-pickers"),
};

const formatSnippet = (snippet: any) =>
  prettier
    .format(snippet, {
      parser: "typescript",
      plugins: [typescriptParser],
      semi: false,
    })
    .replace(/^;/, ""); // Remove leading semicolons from JSX

const formatCode = (Code: any) =>
  typeof Code === "string"
    ? Code
    : reactElementToJSXString(Code(), {
        useBooleanShorthandSyntax: false,
        showDefaultProps: false,
        showFunctions: true,
        filterProps: ["onChange", "onBlur", "onFocus"],
      });

function getMatchingComps(
  componentsMap: Record<string, string>,
  pattern?: RegExp
) {
  if (!pattern) {
    return componentsMap;
  }
  return Object.keys(componentsMap)
    .filter((compName) => pattern.test(compName))
    .reduce((newCompMap: Record<string, string>, compName: string) => {
      return {
        ...newCompMap,
        [compName]: componentsMap[compName],
      };
    }, {} as Record<string, string>);
}

function getPatternFromArgs() {
  if (argv.pattern && typeof argv.pattern === "string") {
    return new RegExp(argv.pattern);
  }
  return undefined;
}

export async function createDocSnippets(componentsMap: Record<string, string>) {
  const arr = Object.keys(componentsMap).reduce(
    (previousValue, currentCompName) => {
      const componentName = currentCompName;
      let docs: ComponentDocs;
      let snippet: string = "";
      let additional: string[] = [];

      const packageName = componentsMap[componentName];
      try {
        docs = require(`../../../packages/${packageName}/src/${componentName}/${componentName}.docs.tsx`)
          .docs;

        console.debug(
          `Generating snippets for ${packageName}/${componentName}`
        );
        const Code = docs.examples.default.Code;
        const codeString = docs.examples.default.codeString;
        if (codeString) {
          snippet = codeString;
        } else if (Code) {
          snippet = formatSnippet(formatCode(Code));
        }

        additional =
          docs.examples.additional?.map((x) => {
            if (x.codeString) {
              return x.codeString;
            }
            if (x.Code) {
              const a = formatSnippet(formatCode(x.Code));
              return a;
            }
            return "";
          }) || [];
      } catch (error) {
        if (
          !componentName.startsWith("Icon") &&
          componentName !== "IconButton"
        ) {
          console.log(componentName, error.message);
        }
        return previousValue;
      }
      return {
        ...previousValue,
        [componentName]: { default: snippet, additional },
      };
    },
    {}
  );

  // TODO: if we generate scripts only for some comps filtered by pattern commandline arg, we need to only overwrite
  // those entries in the json file instead of rewriting the whole file. Read json, if pattern, update instead of rewrite.

  await fse.writeFile(
    `${buildPath}/snippets-components.json`,
    JSON.stringify(arr, null, 2)
  );
  return arr;
}

export async function createLayoutGuideSnippets() {
  let docs: any = "";
  try {
    docs = require(`../../../docs/src/App/routes/foundations/layout/layout.docs.tsx`)
      .docs;
  } catch (error) {
    console.log(error.message);
  }

  const snippets = Object.keys(docs).reduce((previousValue, currentValue) => {
    const componentName = currentValue;
    return {
      ...previousValue,
      [componentName]: docs[componentName].map((s: any) =>
        formatSnippet(formatCode(s.Code))
      ),
    };
  }, {});

  await fse.writeFile(
    `${buildPath}/snippets-layout.json`,
    JSON.stringify(snippets, null, 2)
  );
  return snippets;
}

export async function createDevGuideSnippets() {
  let docs: any = "";
  try {
    docs = require(`../../../docs/src/App/routes/guides/development-workflow.docs.tsx`)
      .docs;
  } catch (error) {
    console.log(error.message);
  }

  const snippets = Object.keys(docs).reduce(
    (previousValue, currentCompName) => {
      const componentName = currentCompName;
      return {
        ...previousValue,
        [componentName]: docs[componentName].map((s: any) =>
          formatSnippet(formatCode(s.Code))
        ),
      };
    },
    {}
  );

  await fse.writeFile(
    `${buildPath}/snippets-dev-guides.json`,
    JSON.stringify(snippets, null, 2)
  );
  return snippets;
}

async function run() {
  try {
    await createLayoutGuideSnippets();
    await createDevGuideSnippets();

    await createDocSnippets(
      getMatchingComps(componentsMap, getPatternFromArgs())
    );
  } catch (err) {}
}

run();
