import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Emphasis, Text } from "..";

export const docs: ComponentDocs = {
  category: "Content",
  componentName: "Emphasis",
  description:
    "This component marks text that has stress emphasis which traditionally means that the text is displayed in italics. ",
  migrationGuide: true,
  examples: [
    {
      Code: () => (
        <Text>
          The last word of this sentence is marked as{" "}
          <Emphasis>stressed</Emphasis>.
        </Text>
      ),
    },
  ],
  snippets: [
    {
      label: "Standard",
      Code: () => <Emphasis>Emphasis text</Emphasis>,
    },
  ],
};
