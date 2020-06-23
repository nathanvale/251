/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
//@ts-ignore
import { Text, TextLink } from "@origin-digital/ods-core";
import { SvgIcon, SvgIconProps } from "./SvgIcon";

export const docs: ComponentDocs<SvgIconProps> = {
  category: "Atomic",
  componentName: "SvgIcon",
  description: (
    <Text>
      If you need a custom SVG icon, not available in the{" "}
      <TextLink href="#/foundations/icons">ODS Icon library</TextLink>, you can
      use the <code>&lt;SvgIcon/&gt;</code> wrapper. This component extends the
      native <code>&lt;svg&gt;</code> element.
    </Text>
  ),
  propDescriptions: {
    children: "Svg nodes passed into the SVG element",
    tone:
      "The tone of the component. It supports theme colors that make sense for this component.",
    size:
      "The fontSize applied to the icon, xsmall (20px) | small (24px) | medium (48px) | large (64px). It can also be configured to inherit font size.",
    viewBox:
      "Allows you to redefine what the coordinates units mean inside an SVG element",
    titleAccess:
      "Provides a human-readable title for the element that contains it.",
  },
  migrationGuide: false,
  examples: {
    default: {},
    additional: [
      {
        label: "Creating a custom svg",
        description: (
          <Text>
            To create your custom svg simply pass in the svg{" "}
            <code>&lt;path&gt;</code> as children. (Mood icon{" "}
            <code>&lt;path&gt;</code> from the free{" "}
            <TextLink href="https://material.io/resources/icons/?search=mood&icon=mood&style=baseline">
              Material icons
            </TextLink>{" "}
            library.)
          </Text>
        ),
        Code: () => (
          <SvgIcon size="large">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </SvgIcon>
        ),
      },
      {
        label: "Creating a custom svg with a redefined view box",
        description: (
          <Text>
            To redefine what the svg coordinates units mean pass in a custom{" "}
            <code>viewBox</code>. (Heart icon <code>&lt;path&gt;</code> with a{" "}
            <code>viewBox="0 0 48 48"</code> from the free{" "}
            <TextLink href="https://icomoon.io/">icomoon</TextLink> library.)
          </Text>
        ),
        Code: () => (
          <SvgIcon tone="critical" size="large" viewBox="0 0 48 48">
            <path d="M35.399 3c-5.045 0-9.387 4.104-11.398 8.391-2.013-4.286-6.355-8.391-11.401-8.391-6.955 0-12.6 5.646-12.6 12.601 0 14.149 14.273 17.859 24.001 31.848 9.195-13.902 23.999-18.15 23.999-31.848 0-6.956-5.645-12.601-12.601-12.601z" />
          </SvgIcon>
        ),
      },
    ],
  },
  snippets: [],
};
