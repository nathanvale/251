import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Text, TextProps } from "../Text";
import { TextLink } from "./TextLink";

export const docs: ComponentDocs<TextProps> = {
  category: "Interaction",
  componentName: "TextLink",
  description: `By default, this component renders a native "a" element. If you’d like to customise the implementation of this component (e.g. to use a React Router link) you should use TextLinkRenderer instead. This component should only be used inside a Text or Heading component.`,
  propDescriptions: {},
  migrationGuide: false,

  examples: {
    default: {
      Code: () => (
        <Text>
          <TextLink href="">Text link</TextLink>
        </Text>
      ),
    },
    additional: [
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
  },
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
