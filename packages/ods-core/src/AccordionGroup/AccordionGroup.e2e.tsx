import React from "react";
import { E2ETests } from "@origin-digital/ods-types";
import { AccordionGroup } from "../AccordionGroup/AccordionGroup";
import { generateAccordion } from "../Accordion/Accordion.helper";

const accordions = [
  ["My first accordion", "accordion-1"],
  ["My second accordion", "accordion-2"],
  ["My third accordion", "accordion-3"],
];

export const tests: E2ETests = [
  {
    label: "Default accordion group",
    Code: () => (
      <AccordionGroup>
        {accordions.map(([summary, id]) => generateAccordion({ summary, id }))}
      </AccordionGroup>
    ),
    responsive: false,
  },
];
