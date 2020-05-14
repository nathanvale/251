/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Placeholder, PlaceholderProps } from "..";

export const docs: ComponentDocs<PlaceholderProps> = {
  category: "Layout",
  componentName: "Placeholder",
  description:
    "This component is helpful for laying out placeholders for future content.",
  propDescriptions: {},
  migrationGuide: false,
  examples: {
    default: {
      Code: () => <Placeholder />,
    },
    additional: [
      {
        label: "Setting the Label",
        Code: () => <Placeholder label="Placeholder for content" />,
      },
      {
        label: "Setting the Shape",
        Code: () => <Placeholder shape="round" width={120} height={120} />,
      },
      {
        label: "Setting the Width",
        Code: () => <Placeholder width={120} />,
      },
      {
        label: "Setting the Height",
        Code: () => <Placeholder height={400} />,
      },
      {
        label: "Responsive Height Across Mobile and Desktop",
        description:
          "Width can be controlled responsively by passing in an array of mobile and desktop pixel sizes as values. Open in Playroom to see the responsive behaviour of this example.",
        Code: () => <Placeholder height={[100, 500]} />,
      },
      {
        label: "Responsive Height Across All Five Breakpoints",
        description:
          "For more granular control across all 5 breakpoints, ‘xs’, ‘sm’,  ‘md’, ‘lg’ and ‘xl’, width can be controlled responsively by passing in an object with breakpoints as keys and pixel sizes as values. Open in Playroom to see the responsive behaviour of this example.",
        Code: () => (
          <Placeholder
            height={{
              xs: 100,
              sm: 200,
              md: 300,
              lg: 400,
              xl: 500,
            }}
          />
        ),
      },
    ],
  },
  snippets: [],
};
