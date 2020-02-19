/* eslint-disable react/display-name */
import React from "react";
import {Placeholder, Stack} from "@origin-digital/ods-core";
import {ComponentDocs} from "../../../../docs/src/types";
import {Hidden, HiddenProps} from "..";

export const docs: ComponentDocs<HiddenProps> = {
  category: "Experimental",
  componentName: "Hidden",
  description:
    "Responsively hides children based on the selected implementation.",
  propDescriptions: {
    screen: "If true, hides content on screen readers",
    print: "If true, hides content when printing",
    below: "Hides content below the selected breakpoint",
    above: "Hides content above the selected breakpoint",
    inline: "If true, hides inline text nodes",
  },
  migrationGuide: false,
  examples: [
    {
      label: "Hiding components below the tablet breakpoint",
      Code: () => (
        <Stack space="small">
          <Placeholder>The following line is hidden below tablet:</Placeholder>
          <Hidden below="tablet">
            <Placeholder>Hidden below tablet.</Placeholder>
          </Hidden>
        </Stack>
      ),
    },
    {
      label: "Hiding components below the desktop breakpoint",
      Code: () => (
        <Stack space="small">
          <Placeholder>The following line is hidden below desktop:</Placeholder>
          <Hidden below="desktop">
            <Placeholder>Hidden below desktop.</Placeholder>
          </Hidden>
        </Stack>
      ),
    },
    {
      label: "Hiding components above the mobile breakpoint",
      Code: () => (
        <Stack space="small">
          <Placeholder>The following line is hidden above mobile:</Placeholder>
          <Hidden above="mobile">
            <Placeholder>Hidden above mobile.</Placeholder>
          </Hidden>
        </Stack>
      ),
    },
    {
      label: "Hiding components above the tablet breakpoint",
      Code: () => (
        <Stack space="small">
          <Placeholder>The following line is hidden above tablet:</Placeholder>
          <Hidden above="tablet">
            <Placeholder>Hidden above tablet.</Placeholder>
          </Hidden>
        </Stack>
      ),
    },
    {
      label: "Hiding components when on print",
      Code: () => (
        <Stack space="small">
          <Placeholder>The following line is hidden on print:</Placeholder>
          <Hidden print={true}>
            <Placeholder>Hidden on print.</Placeholder>
          </Hidden>
        </Stack>
      ),
    },
    {
      label: "Hiding components when on screen readers",
      Code: () => (
        <Stack space="small">
          <Placeholder>The following line is hidden on screen:</Placeholder>
          <Hidden screen={true}>
            <Placeholder>Hidden on screen.</Placeholder>
          </Hidden>
        </Stack>
      ),
    },
    {
      label: "Hiding text nodes below tablet",
      Code: () => (
        <Placeholder>
          The following text node is hidden below tablet:
          <Hidden below="tablet" inline={true}>
            Hidden below tablet.
          </Hidden>
        </Placeholder>
      ),
    },
    {
      label: "Hiding text nodes below desktop",
      Code: () => (
        <Placeholder>
          The following text node is hidden below desktop:
          <Hidden below="desktop" inline={true}>
            Hidden below desktop.
          </Hidden>
        </Placeholder>
      ),
    },
    {
      Code: () => (
        <Placeholder>
          The following text node is hidden above mobile:
          <Hidden above="mobile" inline={true}>
            Hidden above mobile.
          </Hidden>
        </Placeholder>
      ),
    },
    {
      label: "Hiding text nodes above tablet",
      Code: () => (
        <Placeholder>
          The following text node is hidden above tablet:
          <Hidden above="tablet" inline={true}>
            Hidden above tablet.
          </Hidden>
        </Placeholder>
      ),
    },
    {
      label: "Hiding text nodes on print",
      Code: () => (
        <Placeholder>
          The following text node is hidden on print:
          <Hidden inline={true} print={true}>
            Hidden on print.
          </Hidden>
        </Placeholder>
      ),
    },
    {
      label: "Hiding text nodes on screen readers",
      Code: () => (
        <Placeholder>
          The following text node is hidden on screen:
          <Hidden inline={true} screen={true}>
            Hidden on screen.
          </Hidden>
        </Placeholder>
      ),
    },
  ],
};
