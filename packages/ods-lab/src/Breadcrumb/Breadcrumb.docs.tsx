/* eslint-disable react/display-name */
import React from "react";
import { Text, TextLink } from "@origin-digital/ods-core";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Breadcrumb, BreadcrumbProps } from "./Breadcrumb";

export const docs: ComponentDocs<BreadcrumbProps> = {
  category: "Experimental",
  componentName: "Breadcrumb",
  description: (
    <Text>
      Breadcrumb is a link that can be used inside the{" "}
      <TextLink href="#/components/Breadcrumbs">Breadcrumbs</TextLink>{" "}
      component.
    </Text>
  ),
  propDescriptions: {
    active: "Visually sets the breadcrumb link as active",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => <Breadcrumb href="">Breadcrumb</Breadcrumb>,
    },
    additional: [
      {
        label: "Setting the active breadcrumb",
        Code: () => (
          <Breadcrumb href="" active>
            Breadcrumb
          </Breadcrumb>
        ),
      },
    ],
  },
  snippets: [],
};
