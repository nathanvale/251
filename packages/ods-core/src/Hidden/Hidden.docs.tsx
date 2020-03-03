/* eslint-disable react/display-name */
import React from "react";
import {Placeholder, Stack} from "@origin-digital/ods-core";
import {ComponentDocs} from "../../../../docs/src/types";
import {Hidden, HiddenProps} from "../Hidden/Hidden";

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
          <Placeholder>Not hidden.</Placeholder>
        </Hidden>
      ),
    },
    {
      label: "Hiding components below the md breakpoint",
      Code: () => (
        <Stack space="small">
          <Placeholder>The following line is hidden below md:</Placeholder>
          <Hidden below="md">
            <Placeholder>Hidden below md.</Placeholder>
          </Hidden>
        </Stack>
      ),
    },
    {
      label: "Hiding components above the sm breakpoint",
      Code: () => (
        <Stack space="small">
          <Placeholder>The following line is hidden above sm:</Placeholder>
          <Hidden above="sm">
            <Placeholder>Hidden above sm.</Placeholder>
          </Hidden>
        </Stack>
      ),
    },
    {
      label:
        "Hiding components above the sm breakpoint and below to lg breakpoint",
      Code: () => (
        <Stack space="small">
          <Placeholder>
            The following line is hidden above sm and below lg:
          </Placeholder>
          <Hidden above="sm" below="lg">
            <Placeholder>Hidden above sm and below lg.</Placeholder>
          </Hidden>
        </Stack>
      ),
    },
    {
      label: "Hiding text nodes below md",
      Code: () => (
        <Placeholder>
          The following text node is hidden below md:
          <Hidden below="md" inline={true}>
            Hidden below md.
          </Hidden>
        </Placeholder>
      ),
    },
    {
      label: "Hiding text nodes above sm",
      Code: () => (
        <Placeholder>
          The following text node is hidden above sm:
          <Hidden above="sm" inline={true}>
            Hidden above sm.
          </Hidden>
        </Placeholder>
      ),
    },
  ],
};