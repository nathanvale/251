import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Text } from "../Text";
import { Columns } from "../Columns";
import { Column } from "../Column";
import { Box } from "../Box";
import { Spinner, SpinnerProps, SpinnerSize } from "./Spinner";

export const docs: ComponentDocs<SpinnerProps> = {
  category: "Atomic",
  componentName: "Spinner",
  description: [
    "This component is used to show a spinner while the user is waiting for an action to be done.",
  ].join(" "),
  propDescriptions: {
    size: [
      `Size of the Spinner.`,
      `The "xsmall" size is for very specific use cases. Do not use this size unless you know what you are doing.`,
    ].join(" "),
    color: [`Available colours to choose for the Spinner.`].join(" "),
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => <Spinner />,
    },
    additional: [
      {
        label: "Inherit color form parent context",
        description: [
          `You can change the color to inherit from tone value of its parent.`,
        ].join(" "),
        Code: () => (
          <Text tone="positive">
            This is inherited colour <Spinner color="inherit" />
          </Text>
        ),
      },
      {
        label: "color white, on dark backgrounds",
        description: `If the background is dark, use the "white" color for spinner.`,
        playroom: false,
        Code: () => (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ backgroundColor: "rgb(236, 0, 0)", height: "100px" }}
          >
            <Spinner color="white" />
          </Box>
        ),
      },
      {
        label: "Different spinner sizes",
        Code: () => (
          <Columns space="medium">
            {(["xsmall", "small", "medium", "large"] as SpinnerSize[]).map(
              (size) => (
                <Column key={size}>
                  <Spinner size={size} />
                </Column>
              )
            )}
          </Columns>
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Basic loading",
      Code: () => <Spinner />,
    },
    {
      label: "with color and size",
      Code: () => <Spinner size="large" color="inherit" />,
    },
  ],
};
