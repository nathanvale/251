/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Text, TextLink, OriginThemeProviderProps } from "..";

export const docs: ComponentDocs<OriginThemeProviderProps> = {
  category: "Logic",
  componentName: "OriginThemeProvider",
  description:
    "OriginThemeProvider lets you apply a consistent tone to your app. It allows you to customize all design aspects of your project in order to meet the specific needs of our brands. By default the OriginThemeProvider comes with the Origin Energy retail theme.",
  propDescriptions: {
    linkComponent:
      "The custom link component you would like to use for ODS link components.",
  },
  migrationGuide: false,
  examples: {
    default: {
      codeString: `import { OriginThemeProvider } from "@origin-digital/ods-core";
export default ({ children }: { children: React.ReactChild }) => (
  <OriginThemeProvider>{children}</OriginThemeProvider>
);
      `,
    },
    additional: [
      {
        label: "Custom link implementation",
        description: (
          <Text>
            By default ODS link components such as{" "}
            <TextLink href="/components/TextLink">TextLink</TextLink>,{" "}
            <TextLink href="/components/ChevronLink">ChevronLink</TextLink> and{" "}
            <TextLink href="/components/HeadingChevronLink">
              HeadingChevronLink
            </TextLink>{" "}
            all use <code>&lt;a/&gt;</code> tags by default. If you’d like to
            customise the implementation of these components (e.g. to use a
            React Router link) you can pass in your own custom link
            implementation.
          </Text>
        ),
        codeString: `
        import React from 'react';
        import { Link as ReactRouterLink } from 'react-router-dom';
        import { OriginThemeProvider } from "@origin-digital/ods-core";
        import { LinkComponentProps } from "@origin-digital/ods-types";

        // First create the custom link implementation:
        const CustomLink = React.forwardRef<any, LinkComponentProps>((props, ref) => {
          const { href, ...restProps } = props;
          return href[0] === "/" ? (
            // For tracking to be active,  
            // You must wrap with React.forardRef and pass down.
            <ReactRouterLink
            to={href}
            ref={ref}
            {...restProps}
            />
            ) : (
            <a href={href} ref={ref} {...restProps} />
          );
        });

        // Then pass it to OriginThemeProvider:
        export const App = () => (
          <OriginThemeProvider linkComponent={CustomLink}>
            ...
          </OriginThemeProvider>
        );
      `,
      },
    ],
  },
  snippets: [],
};
