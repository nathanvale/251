/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Text, TextProps, Box, Stack } from "..";

export const docs: ComponentDocs<TextProps> = {
  category: "Content",
  componentName: "Text",
  description:
    "This component is experimental and is currently only used internally by these design system docs. It will eventually be replaced with a MUI implementation.",
  propDescriptions: {},
  migrationGuide: false,
  examples: [
    { label: "Body Text", Code: () => <Text>Body text</Text> },
    {
      label: "Body Small Text",
      Code: () => <Text variant="body-small">Body small text</Text>,
    },
    {
      label: "Subtitle Text",
      Code: () => <Text variant="subtitle">Subtitle text</Text>,
    },
    {
      label: "Subtitle Small Text",
      Code: () => <Text variant="subtitle-small">Subtitle small text</Text>,
    },
    {
      label: "Caption Text",
      Code: () => <Text variant="caption">Caption text</Text>,
    },
    {
      label: "Overline Text",
      Code: () => <Text variant="overline-text">Overline text</Text>,
    },
    {
      label: "Tone (positive)",
      Code: () => <Text tone="positive">Positive text</Text>,
    },
    {
      label: "Tone (critcal)",
      Code: () => <Text tone="critcal">Critcal text</Text>,
    },
    {
      label: "Weight (medium)",
      Code: () => <Text weight="medium">Medium text</Text>,
    },
    {
      label: "Weight (strong)",
      Code: () => <Text weight="strong">Strong text</Text>,
    },
    {
      label: "Truncating long text",
      Code: () => (
        <Box style={{ width: 90 }}>
          <Text truncate>Truncated text</Text>
        </Box>
      ),
    },
    {
      label: "Text Alignment",
      Code: () => (
        <Stack space="medium">
          <Text>Left</Text>
          <Text align="center">Center</Text>
          <Text align="right">Right</Text>
        </Stack>
      ),
    },
    {
      label: "Text Alignment (responsive)",
      Code: () => <Text align={["left", "center"]}>Aligment</Text>,
    },
  ],
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
      label: "Tone (critcal)",
      Code: () => <Text tone="critcal">Critcal text</Text>,
    },
    {
      label: "Weight (medium)",
      Code: () => <Text weight="medium">Medium text</Text>,
    },
    {
      label: "Weight (strong)",
      Code: () => <Text weight="strong">Strong text</Text>,
    },
  ],
};
