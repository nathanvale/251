import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { IconLightbulbOutline } from "@origin-digital/ods-icons";
import { Tab } from "..";

export const docs: ComponentDocs = {
  category: "Content",
  componentName: "Tab",
  description: `An individual Tab, only useful as the child of the Tabs component.`,
  migrationGuide: false,
  propDescriptions: {
    value: "This tab is selected when this value matches the parent Tabs value",
    label: "Text label for the tab",
    icon: "Optional icon to be displayed to the left of the label",
    children:
      "The content to be shown when the tab is selected (handled by the Tabs component)",
    muiProps: "Allows access to the MUI component API under the hood",
  },
  examples: {
    default: {
      Code: () => <Tab data-id="tab1" label="Electricity" />,
    },
    additional: [
      {
        label: "Icon tab",
        description: "Tab with an icon on it",
        Code: () => (
          <Tab
            data-id="tab1"
            label="Electricity"
            icon={<IconLightbulbOutline tone="neutral" />}
          />
        ),
      },
    ],
  },
  snippets: [],
};
