import React from "react";

import { ComponentDocs } from "@origin-digital/ods-types";
import { AccordionGroup } from "../AccordionGroup/AccordionGroup";
import { AccordionProps } from "../Accordion/Accordion";
import { generateAccordion } from "../Accordion/Accordion.helper";

const accordions = [
  ["My first accordion", "accordion-1"],
  ["My second accordion", "accordion-2"],
  ["My third accordion", "accordion-3"],
];

export const docs: ComponentDocs<AccordionProps> = {
  category: "Content",
  componentName: "AccordionGroup",
  description:
    "AccordionGroup is a low-level wrapping component. Its main concerns are wrapping multiple Accordions. Open the examples in Playroom to see the behaviour of this component.",
  propDescriptions: {},
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <AccordionGroup>
          {accordions.map(([summary, id]) =>
            generateAccordion({ summary, id })
          )}
        </AccordionGroup>
      ),
    },
    additional: [],
  },
  snippets: [
    {
      label: "Default",
      Code: () => (
        <AccordionGroup>
          {accordions.map(([summary, id]) =>
            generateAccordion({ summary, id })
          )}
        </AccordionGroup>
      ),
    },
  ],
};
