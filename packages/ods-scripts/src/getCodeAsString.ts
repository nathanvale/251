import reactElementToJSXString from "react-element-to-jsx-string";
import memoize from "lodash/memoize";
import prettier from "prettier/standalone";
import babylonParser from "prettier/parser-babylon";

const formatSnippet = memoize(
  (snippet) =>
    prettier
      .format(snippet, {
        parser: "babel",
        plugins: [babylonParser],
        semi: false,
      })
      .replace(/^;/, "") // Remove leading semicolons from JSX
);

export const getCodeAsString = (Code: () => JSX.Element) => {
  const codeAsString = formatSnippet(
    typeof Code === "string"
      ? Code
      : reactElementToJSXString(Code(), {
          useBooleanShorthandSyntax: false,
          showDefaultProps: false,
          showFunctions: false,
          filterProps: ["onChange", "onBlur", "onFocus"],
        })
  );

  return codeAsString;
};
