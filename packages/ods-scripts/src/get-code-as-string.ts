import reactElementToJSXString from "react-element-to-jsx-string";
import memoize from "lodash/memoize";
import prettier from "prettier/standalone";
import babelParser from "prettier/parser-babel";

const formatSnippet = memoize(
  (snippet) =>
    prettier
      .format(snippet, {
        parser: "babel",
        plugins: [babelParser],
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
          showFunctions: true,
          filterProps: ["onChange", "onBlur", "onFocus"],
        })
  );

  return codeAsString;
};
