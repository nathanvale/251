/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "../../../../docs/src/types";
import { Placeholder } from "../Placeholder/Placeholder";
import { CardProps, Card } from "..";

export const docs: ComponentDocs<CardProps> = {
  category: "Layout",
  componentName: "Card",
  description: "Cards provide content containers with responsive padding.",
  propDescriptions: {
    padding: "The size of the responsive paddingX and paddingY of the card.",
  },
  migrationGuide: false,
  examples: [
    {
      label: "Default Card",
      description: "Be default cards have a small padding size.",
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
