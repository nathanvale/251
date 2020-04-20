/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { HeadingProps, Heading } from "./Heading";
import { Box, Stack } from "..";

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
  description: "",
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
  examples: [
    {
      label: "Heading H1",
      Code: () => <Heading variant="h1">Heading 1</Heading>,
    },
    {
      label: "Heading H2",
      Code: () => <Heading variant="h2">Heading 2</Heading>,
    },
    {
      label: "Heading H2",
      Code: () => <Heading variant="h3">Heading 3</Heading>,
    },
    {
      label: "Heading H4",
      Code: () => <Heading variant="h4">Heading 4</Heading>,
    },
    {
      label: "Truncating long headings",
      Code: () => (
        <Box style={{ width: 120 }}>
          <Heading variant="h4" truncate>
            Truncated heading
          </Heading>
        </Box>
      ),
    },
    {
      label: "Heading Alignment",
      Code: () => (
        <Stack space="medium">
          <Heading variant="h4">Left</Heading>
          <Heading variant="h4" align="center">
            Center
          </Heading>
          <Heading variant="h4" align="right">
            Right
          </Heading>
        </Stack>
      ),
    },
    {
      label: "Heading Alignment (responsive)",
      Code: () => (
        <Heading variant="h4" align={["left", "center"]}>
          Aligment
        </Heading>
      ),
    },
    {
      label: `Applying medium weight`,
      description: `This only applies to heading variants of "h1" or "h2". Other use cases will throw a typescript error or a runtime error in playroom.`,
      Code: () => (
        <Heading variant="h2" weight="medium">
          Heading 2 with medium weight
        </Heading>
      ),
    },
    {
      label: "Changing the semantic meaning for SEO",
      Code: () => (
        <Heading variant="h4" component="h1">
          {`This heading is actually a h1`}
        </Heading>
      ),
    },
  ],
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
