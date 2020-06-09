/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";
import { Breadcrumbs, BreadCrumbsProps } from "./Breadcrumbs";

export const docs: ComponentDocs<BreadCrumbsProps> = {
  category: "Experimental",
  componentName: "Breadcrumbs",
  description:
    "Breadcrumbs allow users to make selections from a range of values.",
  propDescriptions: {
    children: "A list of Breadcrumb components.",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <Breadcrumbs>
          <Breadcrumb href="">Fruit</Breadcrumb>
          <Breadcrumb href="">Citrus</Breadcrumb>
          <Breadcrumb href="" active>
            Lemons
          </Breadcrumb>
        </Breadcrumbs>
      ),
    },
  },
  snippets: [
    {
      label: "Default",
      Code: () => (
        <Breadcrumbs>
          <Breadcrumb href="">Fruit</Breadcrumb>
          <Breadcrumb href="">Citrus</Breadcrumb>
          <Breadcrumb href="" active>
            Lemons
          </Breadcrumb>
        </Breadcrumbs>
      ),
    },
  ],
};
