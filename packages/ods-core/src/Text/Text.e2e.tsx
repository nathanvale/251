import React from "react";
import { E2ETests } from "@origin-digital/ods-types";
import { Stack } from "../Stack";
import { Box } from "../Box";
import { Text } from "./Text";

export const tests: E2ETests = [
  {
    label: "Default",
    Code: () => <Text>The quick brown fox jumps over the lazy dog.</Text>,
    responsive: true,
  },
  {
    label: "Body Small Text",
    Code: () => (
      <Text variant="body-small">
        The quick brown fox jumps over the lazy dog.
      </Text>
    ),
    responsive: true,
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
      <Text tone="positive">The quick brown fox jumps over the lazy dog.</Text>
    ),
  },
  {
    label: "Tone (critical)",
    Code: () => (
      <Text tone="critical">The quick brown fox jumps over the lazy dog.</Text>
    ),
  },
  {
    label: "Weight (medium)",
    Code: () => (
      <Text weight="medium">The quick brown fox jumps over the lazy dog.</Text>
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
        <Text align="center">The quick brown fox jumps over the lazy dog.</Text>
        <Text align="right">The quick brown fox jumps over the lazy dog.</Text>
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
];
