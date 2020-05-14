import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Strong, Text, Heading } from "..";

export const docs: ComponentDocs = {
  category: "Content",
  componentName: "Strong",
  description: `This component is a phrase tag. It defines important text.`,
  migrationGuide: true,
  examples: {
    default: {
      Code: () => (
        <Text>
          The quick brown fox <Strong>jumps</Strong> over the lazy dog.
        </Text>
      ),
    },
    additional: [
      {
        label: "Inline Heading Variant H1",
        Code: () => (
          <Heading variant="h1">
            The quick brown fox <Strong>jumps</Strong> over the lazy dog.
          </Heading>
        ),
      },
      {
        label: "Inline Heading Variant H2",
        Code: () => (
          <Heading variant="h2">
            The quick brown fox <Strong>jumps</Strong> over the lazy dog.
          </Heading>
        ),
      },
      {
        label: "Inline Heading Variant H3",
        Code: () => (
          <Heading variant="h3">
            The quick brown fox <Strong>jumps</Strong> over the lazy dog.
          </Heading>
        ),
      },
      {
        label: "Inline Heading Variant H4",
        Code: () => (
          <Heading variant="h4">
            The quick brown fox <Strong>jumps</Strong> over the lazy dog.
          </Heading>
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Standard",
      Code: () => <Strong>Strong text</Strong>,
    },
  ],
};
