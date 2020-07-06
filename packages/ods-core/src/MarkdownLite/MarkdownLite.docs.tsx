/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Strong, Text, TextLink } from "@origin-digital/ods-core";
import { MarkdownLite, MarkdownLiteProps } from "./MarkdownLite";

export const docs: ComponentDocs<MarkdownLiteProps> = {
  category: "Content",
  componentName: "MarkdownLite",

  description: (
    <Text>
      MarkdownLite is used to convert basic markdown into origin content
      components. <br />
      <Strong>Matches</Strong>
      <ul>
        <li>
          <Strong>Bold:</Strong> ** and __
        </li>
        <li>
          <Strong>Italic:</Strong> * and _
        </li>
        <li>
          <Strong>Links:</Strong> [Link text](http://example.com)
        </li>
      </ul>
    </Text>
  ),
  propDescriptions: {},
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <Text>
          <MarkdownLite>
            **Welcome** to [Origin Energy](http://originenergy.com.au)
          </MarkdownLite>
        </Text>
      ),
    },
    additional: [
      {
        label: "Mesh event implementation",
        description: (
          <Text>
            To use a mesh event in the markdown component you will need to add a
            custom linkComponent into the{" "}
            <TextLink href="/components/OriginThemeProvider">
              OriginThemeProvider
            </TextLink>{" "}
            which parses the href of the links and converts them to mesh events
          </Text>
        ),
        codeString: `
        import React from 'react';
        import { OriginThemeProvider } from "@origin-digital/ods-core";
        import { LinkComponentProps } from "@origin-digital/ods-types";
        import { parseMarkdownEvent } from "@origin-digital/event-dispatcher";

        // First create the custom link implementation
        const MeshLink = React.forwardRef<any, LinkComponentProps>((props, ref) => {
          const { href, onClick } = parseMarkdownEvent(props.href);
          return <a ref={ref} {...props} href={href} onClick={onClick} />
        });

        // Then pass it to OriginThemeProvider:
        export const App = () => (
          <OriginThemeProvider linkComponent={MeshLink}>
            ...
          </OriginThemeProvider>
        );
      `,
      },
    ],
  },
  snippets: [
    {
      label: "Basic",
      Code: () => (
        <Text>
          <MarkdownLite>
            **Bold text** and *italic text* with
            [links](http://originenergy.com.au)
          </MarkdownLite>
        </Text>
      ),
    },
  ],
};
