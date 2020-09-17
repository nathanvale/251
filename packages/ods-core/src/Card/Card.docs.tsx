import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Placeholder } from "../Placeholder/Placeholder";
import { CardProps, Card } from "../Card";

export const docs: ComponentDocs<CardProps> = {
  category: "Layout",
  componentName: "Card",
  description:
    "Cards contain content and actions about a single subject. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.",
  propDescriptions: {
    padding: "The size of the responsive paddingX and paddingY of the card.",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <Card>
          <Placeholder />
        </Card>
      ),
    },
    additional: [
      {
        label: "Medium Padding",
        Code: () => (
          <Card padding="medium">
            <Placeholder />
          </Card>
        ),
      },
      {
        label: "Large Padding",
        Code: () => (
          <Card padding="large">
            <Placeholder />
          </Card>
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Default",
      Code: () => (
        <Card>
          <Placeholder />
        </Card>
      ),
    },
    {
      label: "Medium Padding",
      Code: () => (
        <Card padding="medium">
          <Placeholder />
        </Card>
      ),
    },
    {
      label: "Large Padding",
      Code: () => (
        <Card padding="large">
          <Placeholder />
        </Card>
      ),
    },
  ],
};
