/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { ChevronLinkProps, ChevronLink } from "./ChevronLink";

export const docs: ComponentDocs<ChevronLinkProps> = {
  category: "Interaction",
  componentName: "ChevronLink",
  description: `By default, this component renders a native "a" element. If you’d like to customise the implementation of this component (e.g. to use a React Router link) you should use ChevronLinkRenderer instead.`,
  propDescriptions: {
    href: "Specifies the URL of the page the link goes to",
    domProps: "DOM AnchorHTMLAttributes with exception of href and children",
  },
  migrationGuide: false,
  variant: "table",
  examples: [
    {
      label: "Default Behaviour",
      Code: () => <ChevronLink href="">Chevron link</ChevronLink>,
    },
    {
      label: "Setting the variant",
      Code: () => (
        <ChevronLink variant="secondary" href="">
          Chevron link
        </ChevronLink>
      ),
    },
  ],
  snippets: [
    {
      label: "Default",
      Code: () => <ChevronLink href="">Chevron link</ChevronLink>,
    },
  ],
};
