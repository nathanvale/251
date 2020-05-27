/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import {
  HeadingChevronLinkProps,
  HeadingChevronLink,
} from "./HeadingChevronLink";

export const docs: ComponentDocs<HeadingChevronLinkProps> = {
  category: "Interaction",
  componentName: "HeadingChevronLink",
  description: `By default, this component renders a native "a" element. If you’d like to customise the implementation of this component (e.g. to use a React Router link) you should use ChevronLinkRenderer instead.`,
  propDescriptions: {
    href: "Specifies the URL of the page the link goes to",
  },
  migrationGuide: false,

  examples: {
    default: {
      Code: () => (
        <HeadingChevronLink href="">Heading chevron</HeadingChevronLink>
      ),
    },
  },
  snippets: [
    {
      label: "Default",
      Code: () => (
        <HeadingChevronLink href="">Heading chevron</HeadingChevronLink>
      ),
    },
  ],
};
