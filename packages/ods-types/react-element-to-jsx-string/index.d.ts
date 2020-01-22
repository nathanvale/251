declare module 'react-element-to-jsx-string' {
  import {ReactNode} from 'react';

  const reactElementToJsxString: (
    element: ReactNode,
    options: {
      filterProps?: Array<string>;
      showDefaultProps?: boolean;
      showFunctions?: boolean;
      functionValue?: (fn: Function) => string;
      tabStop?: number;
      useBooleanShorthandSyntax?: boolean;
      maxInlineAttributesLineLength?: number;
      sortProps?: boolean;
      useFragmentShortSyntax?: boolean;
    },
  ) => string;
  // eslint-disable-next-line import/no-default-export
  export default reactElementToJsxString;
}
