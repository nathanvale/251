import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Box } from "../Box";
import { Stack } from "../Stack";
import { HeadingProps, Heading } from "./Heading";

export const headingPropDescriptions: Partial<Record<
  keyof HeadingProps,
  string
>> = {
  component: "Used to change the semantic meaning for SEO",
  truncate:
    "This will add an ellipsis to the end of the heading if the heading drops onto more than one line",
};

export const docs: ComponentDocs<HeadingProps> = {
  category: "Content",
  componentName: "Heading",
  description:
    "Heading is used to define HTML headings. The variant h1 is the most important heading. The variant h4 defines the least important heading.",
  propDescriptions: { ...headingPropDescriptions },
  specialOptionalProps: [
    {
      name: "weight",
      defaultValue: "defaultValue",
      type: {
        label: `"regular" | "medium"`,
        description: `This property only applies to heading variants of "h1" or "h2". Other use cases will throw a typescript error or a runtime error in playroom`,
      },
    },
  ],
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <Heading variant="h1">
          The quick brown fox jumps over the lazy dog
        </Heading>
      ),
    },
    additional: [
      {
        label: "Heading H2",
        Code: () => (
          <Heading variant="h2">
            The quick brown fox jumps over the lazy dog
          </Heading>
        ),
      },
      {
        label: "Heading H3",
        Code: () => (
          <Heading variant="h3">
            The quick brown fox jumps over the lazy dog
          </Heading>
        ),
      },
      {
        label: "Heading H4",
        Code: () => (
          <Heading variant="h4">
            The quick brown fox jumps over the lazy dog
          </Heading>
        ),
      },
      {
        label: "Truncating long headings",
        Code: () => (
          <Box style={{ width: 120 }}>
            <Heading variant="h4" truncate>
              The quick brown fox jumps over the lazy dog
            </Heading>
          </Box>
        ),
      },
      {
        label: "Heading Alignment",
        Code: () => (
          <Stack space="medium">
            <Heading variant="h4">
              The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading variant="h4" align="center">
              The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading variant="h4" align="right">
              The quick brown fox jumps over the lazy dog
            </Heading>
          </Stack>
        ),
      },
      {
        label: "Heading Alignment (responsive)",
        Code: () => (
          <Heading variant="h4" align={["left", "center"]}>
            The quick brown fox jumps over the lazy dog
          </Heading>
        ),
      },
      {
        label: `Applying medium weight`,
        description: `This only applies to heading variants of "h1" or "h2". Other use cases will throw a typescript error or a runtime error in playroom.`,
        Code: () => (
          <Heading variant="h2" weight="medium">
            The quick brown fox jumps over the lazy dog
          </Heading>
        ),
      },
      {
        label: "Changing the semantic meaning for SEO",
        Code: () => (
          <Heading variant="h4" component="h1">
            The quick brown fox jumps over the lazy dog
          </Heading>
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Heading 1",
      Code: () => <Heading variant="h1">Heading 1</Heading>,
    },
    {
      label: "Heading 2",
      Code: () => <Heading variant="h2">Heading 2</Heading>,
    },
    {
      label: "Heading 3",
      Code: () => <Heading variant="h3">Heading 3</Heading>,
    },
    {
      label: "Heading 4",
      Code: () => <Heading variant="h4">Heading 4</Heading>,
    },
  ],
};
