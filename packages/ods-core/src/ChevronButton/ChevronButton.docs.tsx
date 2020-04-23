/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { ChevronButtonProps, ChevronButton } from "./ChevronButton";

export const docs: ComponentDocs<ChevronButtonProps> = {
  category: "Interaction",
  componentName: "ChevronButon",
  description: `By default, this component renders a native "button" element. If you’d like to customise the implementation of this component (e.g. to use a React Router link) you should use ChevronLinkRenderer instead.`,
  propDescriptions: {
    type: "Sets or returns the type of a button",
    domProps:
      "DOM AnchorHTMLAttributes with exception of type, onClick and children",
  },
  migrationGuide: false,
  variant: "table",
  examples: [
    {
      label: "Default Behaviour",
      Code: () => <ChevronButton>Chevron button</ChevronButton>,
    },
    {
      label: "Setting the tone",
      Code: () => (
        <ChevronButton variant="secondary">Chevron button</ChevronButton>
      ),
    },
  ],
  snippets: [
    {
      label: "Default",
      Code: () => <ChevronButton>Chevron button</ChevronButton>,
    },
  ],
};
