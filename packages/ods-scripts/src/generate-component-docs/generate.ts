/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* tslint:disable */
import fs from "fs";
import path from "path";
import ts from "typescript";
import isEqual from "lodash/isEqual";
import {
  NormalisedInterface,
  NormalisedPropType,
} from "@origin-digital/ods-types";

const aliasWhitelist = ["ResponsiveProp", "Date"];
const noNormalisePropNames = ["muiProps", "domProps"];

const getWhiteListRegExp = (awl: string) => {
  const fc = awl.charAt(0);
  const lc = awl.charAt(awl.length - 1);
  const h = awl.substring(0, awl.length - 1);
  const t = awl.substring(1);
  return new RegExp(
    /* eslint-disable no-useless-escape */
    `^${awl}$|\\\s+${h}(${lc}\\\s+|${lc}$)|(\\\s+${fc}|^${fc})${t}\\\s+`
  );
};
const isAliasWhitelist = (typeAlias: string) => {
  return (
    aliasWhitelist.includes(typeAlias) ||
    aliasWhitelist.filter((awl) => getWhiteListRegExp(awl).test(typeAlias))
      .length > 0
  );
};

const propBlacklist = ["key"];

const tsconfigPath = path.join(__dirname, "../../../../tsconfig.json");
const componentsFile = path.join(__dirname, "./components.ts");

const stringAliases: Record<string, string> = {
  // with an explicit alias 'boolean' becomes a union of 'true' | 'false'
  boolean: "boolean",
  CSSProperties: "CSSProperties",
};

const reactNodeTypes = [
  "string",
  "number",
  "false",
  "true",
  "{}",
  "ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<any, any, any>)>",
  "ReactNodeArray",
  "ReactPortal",
];

// eslint-disable-next-line consistent-return
export default () => {
  const basePath = path.dirname(tsconfigPath);
  const { config, error } = ts.readConfigFile(tsconfigPath, (filename) =>
    fs.readFileSync(filename, "utf8")
  );

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }

  const { options, errors } = ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    basePath,
    {},
    tsconfigPath
  );

  if (errors && errors.length) {
    // eslint-disable-next-line no-console
    console.error(errors[0]);
    throw errors[0];
  }

  const program = ts.createProgram([componentsFile], options);

  const checker = program.getTypeChecker();

  const getComponentPropsType = (exp: ts.Symbol) => {
    const type = checker.getTypeOfSymbolAtLocation(
      exp,
      exp.valueDeclaration || exp.declarations[0]
    );

    const callSignatures = type.getCallSignatures();

    if (callSignatures.length) {
      for (const sig of callSignatures) {
        const params = sig.getParameters();
        if (params.length === 0) {
          // eslint-disable-next-line no-continue
          continue;
        }

        const propsParam = params[0];
        if (propsParam.name === "props" || params.length === 1) {
          return propsParam;
        }
      }
    }

    return null;
  };

  const normalizeInterface = (
    propsType: ts.Type,
    propsObj: ts.Symbol
  ): NormalisedInterface => {
    return {
      type: "interface",
      props: Object.assign(
        {},
        ...propsType
          .getProperties()
          .filter((prop) => !propBlacklist.includes(prop.getName()))
          .map((prop) => {
            const propName = prop.getName();

            // Find type of prop by looking in context of the props object itself.
            const propType = checker
              .getTypeOfSymbolAtLocation(prop, propsObj.valueDeclaration)
              .getNonNullableType();

            const isOptional =
              (prop.getFlags() & ts.SymbolFlags.Optional) !== 0;

            const typeAlias = checker.typeToString(
              checker.getTypeAtLocation(prop.valueDeclaration)
            );

            return {
              [propName]: {
                propName,
                required: !isOptional,
                type:
                  isAliasWhitelist(typeAlias) ||
                  noNormalisePropNames.includes(propName)
                    ? typeAlias
                    : normaliseType(propType, propsObj),
              },
            };
          })
      ),
    };
  };

  const normaliseType = (
    type: ts.Type,
    propsObj: ts.Symbol
  ): NormalisedPropType => {
    const typeString = checker.typeToString(type);

    if (stringAliases[typeString]) {
      return stringAliases[typeString];
    }

    if (type.aliasSymbol) {
      const alias = type.aliasSymbol.getName();

      if (aliasWhitelist.includes(alias)) {
        return {
          params: type.aliasTypeArguments
            ? type.aliasTypeArguments.map((aliasArg) =>
                normaliseType(aliasArg, propsObj)
              )
            : [],
          alias,
          type: "alias",
        };
      }
    }

    if (type.isUnion()) {
      const types = type.types.map((unionItem) =>
        checker.typeToString(unionItem)
      );

      return isEqual(types, reactNodeTypes)
        ? "ReactNode"
        : {
            type: "union",
            types: type.types.map((unionItem) =>
              normaliseType(unionItem, propsObj)
            ),
          };
    }

    if (type.isClassOrInterface()) {
      return normalizeInterface(type, propsObj);
    }

    return typeString;
  };

  const getComponentDocs = (exp: ts.Symbol) => {
    const propsObj = getComponentPropsType(exp);

    if (!propsObj || !propsObj.valueDeclaration) {
      return { type: "interface", props: {} };
    }

    const propsType = checker.getTypeOfSymbolAtLocation(
      propsObj,
      propsObj.valueDeclaration
    );

    return normalizeInterface(propsType, propsObj);
  };

  for (const sourceFile of program.getSourceFiles()) {
    if (
      !sourceFile.isDeclarationFile &&
      sourceFile.fileName === componentsFile
    ) {
      const moduleSymbol = checker.getSymbolAtLocation(sourceFile);

      if (moduleSymbol) {
        return Object.assign(
          {},
          ...checker
            .getExportsOfModule(moduleSymbol)
            .filter(
              (moduleExport) =>
                !moduleExport.escapedName.toString().match(/^.*Props$/)
            )
            .map((moduleExport) => {
              return {
                [moduleExport.escapedName as string]: getComponentDocs(
                  moduleExport
                ),
              };
            })
        );
      }
    }
  }
};
