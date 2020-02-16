import reactElementToJSXString from "react-element-to-jsx-string";
import {ExampleDocs} from "../types";

export const getCodeAsString = (Example: ExampleDocs["Code"]) => {
  const codeAsString = reactElementToJSXString(Example(), {
    useBooleanShorthandSyntax: false,
    showDefaultProps: false,
    showFunctions: false,
    filterProps: ["onChange", "onBlur", "onFocus"],
  });

  return codeAsString;
};
