import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Emphasis, Text } from "..";

export const docs: ComponentDocs = {
  category: "Content",
  componentName: "Emphasis",
  description:
    "This component marks text that has stress emphasis which traditionally means that the text is displayed in italics. ",
  migrationGuide: true,
  examples: {
    default: {
      Code: () => (
        <Text>
          The quick brown fox <Emphasis>jumps</Emphasis> over the lazy dog.
        </Text>
      ),
    },
  },
  snippets: [
    {
      label: "Standard",
      Code: () => <Emphasis>Emphasis text</Emphasis>,
    },
  ],
};
