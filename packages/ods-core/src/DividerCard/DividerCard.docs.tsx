import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";
import { TextLink } from "../TextLink/TextLink";
import { Placeholder } from "../Placeholder/Placeholder";
import { DividerCardProps, DividerCard as ODSDivider } from "./DividerCard";

const DividerCard = (props: DividerCardProps) => (
  <Box padding="xxlarge" backgroundColor="grey200">
    <ODSDivider {...props} />
  </Box>
);

DividerCard.displayName = ODSDivider.displayName;

export const docs: ComponentDocs<DividerCardProps> = {
  category: "Layout",
  componentName: "DividerCard",
  description: (
    <Text>
      DividerCard works the same as{" "}
      <TextLink href="#/components/Card">Card</TextLink> except it adds a
      divider between each of it's children the same way{" "}
      <TextLink href="#/components/Stack">Stack</TextLink> does.
    </Text>
  ),
  propDescriptions: {
    padding: "The size of the responsive paddingX and paddingY of the card.",
    space:
      "The T-shirt sized vertical space that DividerCard will add between its children.",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <DividerCard>
          <Placeholder />
          <Placeholder />
        </DividerCard>
      ),
    },
    additional: [
      {
        label: "Medium padding and medium spacing",
        Code: () => (
          <DividerCard padding="medium" space="medium">
            <Placeholder />
            <Placeholder />
          </DividerCard>
        ),
      },
      {
        label: "Large padding and large spacing",
        Code: () => (
          <DividerCard padding="large" space="large">
            <Placeholder />
            <Placeholder />
          </DividerCard>
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Default",
      Code: () => (
        <DividerCard>
          <Placeholder />
          <Placeholder />
        </DividerCard>
      ),
    },
    {
      label: "Medium padding and medium spacing",
      Code: () => (
        <DividerCard padding="medium" space="medium">
          <Placeholder />
          <Placeholder />
        </DividerCard>
      ),
    },
    {
      label: "Large padding and large spacing",
      Code: () => (
        <DividerCard padding="large" space="large">
          <Placeholder />
          <Placeholder />
        </DividerCard>
      ),
    },
  ],
};
