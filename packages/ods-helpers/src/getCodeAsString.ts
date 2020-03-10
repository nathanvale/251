import reactElementToJSXString from "react-element-to-jsx-string";
import memoize from "lodash/memoize";
import prettier from "prettier/standalone";
import babylonParser from "prettier/parser-babylon";
import { ExampleDocs } from "@origin-digital/ods-types";

const formatSnippet = memoize(
  snippet =>
    prettier
      .format(snippet, {
        parser: "babel",
        plugins: [babylonParser],
        semi: false,
      })
      .replace(/^;/, ""), // Remove leading semicolons from JSX
);

export const getCodeAsString = (Example: ExampleDocs["Code"]) => {
  const codeAsString = formatSnippet(
    typeof Example === "string"
      ? Example
      : reactElementToJSXString(Example(), {
          useBooleanShorthandSyntax: false,
          showDefaultProps: false,
          showFunctions: false,
          filterProps: ["onChange", "onBlur", "onFocus"],
        }),
  );

  return codeAsString;
};
