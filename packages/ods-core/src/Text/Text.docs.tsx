import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Box } from "../Box";
import { Stack } from "../Stack";
import { Text, TextProps } from "./Text";

export const docs: ComponentDocs<TextProps> = {
  category: "Content",
  componentName: "Text",
  description: "",
  propDescriptions: {
    variant: "The font style of the text.",
    tone:
      "Tones represent colours. The usage of colour in our design system is designed to have a strong correlation with the tone of voice being used.",
    truncate:
      "This will add an ellipsis to the end of the text if the text drops onto more than one line.",
    weight: "The font weight of the text.",
    inline:
      "Setting text to inline prevents the text node from take its parents full width.",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => <Text>The quick brown fox jumps over the lazy dog.</Text>,
    },
    additional: [
      {
        label: "Body Small Text",
        Code: () => (
          <Text variant="body-small">
            The quick brown fox jumps over the lazy dog.
          </Text>
        ),
      },
      {
        label: "Subtitle Text",
        Code: () => (
          <Text variant="subtitle">
            The quick brown fox jumps over the lazy dog.
          </Text>
        ),
      },
      {
        label: "Subtitle Small Text",
        Code: () => (
          <Text variant="subtitle-small">
            The quick brown fox jumps over the lazy dog.
          </Text>
        ),
      },
      {
        label: "Caption Text",
        Code: () => (
          <Text variant="caption">
            The quick brown fox jumps over the lazy dog.
          </Text>
        ),
      },
      {
        label: "Overline Text",
        Code: () => (
          <Text variant="overline-text">
            The quick brown fox jumps over the lazy dog.
          </Text>
        ),
      },
      {
        label: "Tone (positive)",
        Code: () => (
          <Text tone="positive">
            The quick brown fox jumps over the lazy dog.
          </Text>
        ),
      },
      {
        label: "Tone (critical)",
        Code: () => (
          <Text tone="critical">
            The quick brown fox jumps over the lazy dog.
          </Text>
        ),
      },
      {
        label: "Weight (medium)",
        Code: () => (
          <Text weight="medium">
            The quick brown fox jumps over the lazy dog.
          </Text>
        ),
      },
      {
        label: "Truncating long text",
        Code: () => (
          <Box style={{ width: 90 }}>
            <Text truncate>The quick brown fox jumps over the lazy dog.</Text>
          </Box>
        ),
      },
      {
        label: "Text Alignment",
        Code: () => (
          <Stack space="medium">
            <Text>The quick brown fox jumps over the lazy dog.</Text>
            <Text align="center">
              The quick brown fox jumps over the lazy dog.
            </Text>
            <Text align="right">
              The quick brown fox jumps over the lazy dog.
            </Text>
          </Stack>
        ),
      },
      {
        label: "Text Alignment (responsive)",
        Code: () => (
          <Text align={["left", "center"]}>
            The quick brown fox jumps over the lazy dog.
          </Text>
        ),
      },
      {
        label: "Inline Text",
        Code: () => (
          <Text>
            The quick brown fox{" "}
            <Text inline tone="positive">
              jumps over
            </Text>{" "}
            the lazy dog.
          </Text>
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Body Text",
      Code: () => <Text>Body text</Text>,
    },
    {
      label: "Tone (positive)",
      Code: () => <Text tone="positive">Positive text</Text>,
    },
    {
      label: "Tone (critical)",
      Code: () => <Text tone="critical">Critical text</Text>,
    },
    {
      label: "Weight (medium)",
      Code: () => <Text weight="medium">Medium text</Text>,
    },
  ],
};
