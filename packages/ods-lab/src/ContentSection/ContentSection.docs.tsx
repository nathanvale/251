/* eslint-disable react/display-name */
import React from "react";
import { Placeholder } from "@origin-digital/ods-core";
import { ComponentDocs } from "../../../../docs/src/types";
import { ContentSection, ContentSectionProps } from "..";

export const docs: ComponentDocs<ContentSectionProps> = {
  category: "Experimental",
  componentName: "ContentSection",
  description:
    "ContentSection is a pattern layout component that uses Section to horizontally center and responsively set full width or max-widths across 5 breakpoints. It also implements responsive padding for its content at mobile and desktop breakpoints. Open the example in Playroom to see the responsive behaviour of this component.",
  propDescriptions: {},
  migrationGuide: false,
  examples: [
    {
      noSection: true,
      Code: () => (
        <ContentSection backgroundColor="white">
          <Placeholder />
        </ContentSection>
      ),
    },
  ],
};
