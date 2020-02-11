import sortBy from "lodash/sortBy";
import {NormalisedPropType} from "../index";

export const typeSerializer = {
  print: (
    type: NormalisedPropType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    serializer: (value: any) => string,
    indent: (value: string) => string,
  ) => {
    if (typeof type === "string") {
      return type;
    } else if (type.type === "union") {
      return type.types
        .sort()
        .map(subType => {
          return `\n${indent(`| ${serializer(subType)}`)}`;
        })
        .join("");
    } else if (type.type === "interface") {
      return `{${sortBy(Object.values(type.props), ({propName}) => propName)
        .map(
          ({propName, required, type: propType}) =>
            `\n${indent(
              `${propName}${required ? "" : "?"}: ${serializer(propType)}`,
            )}`,
        )
        .join("")}\n}`;
    } else {
      return `${type.alias}<${type.params
        .map((param: any) => `${serializer(param)}`)
        .join(",")}\n>`;
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  test: (val: any) => {
    if (typeof val === "object") {
      return ["union", "interface", "alias"].includes(val.type);
    }

    return typeof val === "string";
  },
};
