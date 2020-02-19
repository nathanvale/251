/* eslint-disable react/display-name */
import React from "react";
import {ComponentDocs} from "../../../../docs/src/types";
import {Link, LinkProps} from "..";

export const docs: ComponentDocs<LinkProps> = {
  category: "Experimental",
  componentName: "Link",
  description:
    "This component is experimental and is currently only used internally by these design system docs. It will eventually be replaced with a MUI implementation.",
  propDescriptions: {},
  migrationGuide: false,
  examples: [
    {
      Code: () => <Link>Content</Link>,
    },
  ],
};
