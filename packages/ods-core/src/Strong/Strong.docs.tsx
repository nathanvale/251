import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Strong, Text, Heading } from "..";

export const docs: ComponentDocs = {
  category: "Content",
  componentName: "Strong",
  description: `This component is a phrase tag. It defines important text.`,
  migrationGuide: true,
  examples: [
    {
      label: "Inline Text",
      Code: () => (
        <Text>
          The last word of this sentence is <Strong>strong</Strong>.
        </Text>
      ),
    },
    {
      label: "Inline Heading1",
      Code: () => (
        <Heading variant="h1">
          The last word of this heading is <Strong>strong</Strong>.
        </Heading>
      ),
    },
    {
      label: "Inline Heading3",
      Code: () => (
        <Heading variant="h3">
          The last word of this heading is <Strong>strong</Strong>.
        </Heading>
      ),
    },
  ],
  snippets: [
    {
      label: "Standard",
      Code: () => <Strong>Strong text</Strong>,
    },
  ],
};
