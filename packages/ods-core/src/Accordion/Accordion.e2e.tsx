import React from "react";
import { E2ETests } from "@origin-digital/ods-types";
import { Stack, Heading, Text } from "@origin-digital/ods-core";
import {
  generateAccordion,
  generateControlledAccordion,
} from "./Accordion.helper";

export const tests: E2ETests = [
  {
    label: "Default accordion",
    Code: () => generateAccordion(),
    responsive: false,
  },
  {
    label: "Accordion (default expanded)",
    Code: () => generateAccordion({ defaultExpanded: true }),
    responsive: false,
  },
  {
    label: "Accordion (controlled expanded)",
    Code: () =>
      generateControlledAccordion({ expanded: true, onChange: () => {} }),
    responsive: false,
  },
  {
    label: "Small accordion",
    Code: () => generateAccordion({ size: "small" }),
    responsive: false,
  },
  {
    label: "Medium accordion",
    Code: () => generateAccordion({ size: "medium" }),
    responsive: false,
  },
  {
    label: "Accordion with alternative summary",
    Code: () =>
      generateAccordion({
        summary: (
          <Stack>
            <Heading variant="h4">My accordion</Heading>
            <Text>There are hidden secrets in here</Text>
          </Stack>
        ),
      }),
    responsive: false,
  },
];
