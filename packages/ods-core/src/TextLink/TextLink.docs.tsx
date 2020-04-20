/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Text, TextProps, TextLink } from "..";

export const docs: ComponentDocs<TextProps> = {
  category: "Interaction",
  componentName: "TextLink",
  description: `By default, this component renders a native "a" element. If you’d like to customise the implementation of this component (e.g. to use a React Router link instead) or render something that looks like a link but isn’t semantically a link (e.g. a button), you should use TextLinkRenderer instead.`,
  propDescriptions: {},
  migrationGuide: false,
  variant: "list",
  examples: [
    {
      label: "Text Link",
      Code: () => (
        <Text>
          <TextLink href="">Text link</TextLink>
        </Text>
      ),
    },
    {
      label: "Text Link in a sentence",
      Code: () => (
        <Text>
          The last word of a sentence is a{" "}
          <TextLink href="">text link</TextLink>.
        </Text>
      ),
    },
    {
      label: "Subtitle Text Link",
      Code: () => (
        <Text variant="subtitle">
          The last word of a sentence is a{" "}
          <TextLink href="">text link</TextLink>.
        </Text>
      ),
    },
    {
      label: "Subtitle Small Text Link",
      Code: () => (
        <Text variant="subtitle-small">
          The last word of a sentence is a{"  "}
          <TextLink href="">text link</TextLink>.
        </Text>
      ),
    },
    {
      label: "Body Small Text Link",
      Code: () => (
        <Text variant="body-small">
          The last word of a sentence is a{" "}
          <TextLink href="">text link</TextLink>.
        </Text>
      ),
    },
  ],
  snippets: [
    {
      label: "Inline link",
      Code: () => (
        <Text>
          <TextLink href="">Link text</TextLink>.
        </Text>
      ),
    },
  ],
};
