/* eslint-disable react/display-name */
import React from "react";
import { Placeholder, Stack } from "@origin-digital/ods-core";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Hidden, HiddenProps } from "../Hidden/Hidden";

export const docs: ComponentDocs<HiddenProps> = {
  category: "Layout",
  componentName: "Hidden",
  description:
    "Responsively hides children based on the selected implementation.",
  propDescriptions: {
    below: "Hides content below the selected breakpoint",
    above: "Hides content above the selected breakpoint",
    inline:
      "If true the <Hidden/> container is set to a span instead of a div. This is useful for hiding text in text nodes.",
  },
  migrationGuide: false,
  examples: [
    {
      label: "Default",
      description: "The default behaviour is to not hide children.",
      Code: () => (
        <Hidden>
          <Placeholder label="Not hidden" />
        </Hidden>
      ),
    },
    {
      label: "Hiding components below the md breakpoint",
      Code: () => (
        <Stack space="small">
          <Placeholder label="The following line is hidden below md:" />
          <Hidden below="md">
            <Placeholder label="Hidden below md" />
          </Hidden>
        </Stack>
      ),
    },
    {
      label: "Hiding components above the sm breakpoint",
      Code: () => (
        <Stack space="small">
          <Placeholder label="The following line is hidden above sm:" />
          <Hidden above="sm">
            <Placeholder label="Hidden above sm" />
          </Hidden>
        </Stack>
      ),
    },
    {
      label:
        "Hiding components above the sm breakpoint and below to lg breakpoint",
      Code: () => (
        <Stack space="small">
          <Placeholder label="The following line is hidden above sm and below lg:" />
          <Hidden above="sm" below="lg">
            <Placeholder label="Hidden above sm and below lg" />
          </Hidden>
        </Stack>
      ),
    },
    {
      label: "Hiding text nodes below md",
      Code: () => (
        <span>
          The following text node is hidden below md:
          <Hidden below="md" inline={true}>
            Hidden below md.
          </Hidden>
        </span>
      ),
    },
    {
      label: "Hiding text nodes above sm",
      Code: () => (
        <span>
          The following text node is hidden above sm:
          <Hidden above="sm" inline={true}>
            Hidden above sm.
          </Hidden>
        </span>
      ),
    },
  ],
  snippets: [],
};
