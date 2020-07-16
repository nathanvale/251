import React from "react";

/* eslint-disable react/display-name */
import { ComponentDocs } from "@origin-digital/ods-types";
import { Heading } from "../Heading/Heading";
import { Text } from "../Text/Text";
import { Stack } from "../Stack/Stack";
import { AccordionProps } from "../Accordion/Accordion";
import {
  generateAccordion,
  generateControlledAccordion,
} from "../Accordion/Accordion.helper";

export const docs: ComponentDocs<AccordionProps> = {
  category: "Content",
  componentName: "Accordion",
  description:
    "Accordion allows for structured content to be collapsed or expanded. Open the examples in Playroom to see the behaviour of this component. ",
  propDescriptions: {
    children:
      "Content to be shown in the details (collapsable) section of the accordion.",
    id: "Id of the component used for accessibility.",
    summary: "Content to be shown in the header section of the accordion.",
    className: "Additional class for the accordion.",
    defaultExpanded:
      "If true the accordian will be expanded by default (uncontrolled only)",
    expanded: "If provided the accordion is controlled by the consumer.",
    onChange: "Change function called by the accordion (controlled only).",
    size: "The T-shirt sized padding of accordion.",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => generateAccordion(),
    },
    additional: [
      {
        label: "Condensed",
        Code: () => generateAccordion({ size: "small" }),
      },
      {
        label: "Default expanded",
        Code: () =>
          generateAccordion({
            defaultExpanded: true,
            summary: (
              <Stack>
                <Heading variant="h4">My accordion</Heading>
                <Text>There are hidden secrets in here</Text>
              </Stack>
            ),
          }),
      },
      {
        label: "Controlled",
        Code: () => {
          const [expanded, setExpanded] = React.useState(false);
          return generateControlledAccordion({
            expanded,
            onChange: () => setExpanded(!expanded),
          });
        },
        codeString: `
  import React from 'react';
  import { Accordion } from '@origin-digital/ods-core';
  
  export default () => {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)} summary="My Accordion title">
          <Text>
            Lorum ipsum...
          </Text>
        </Accordion>
      );
    };
  `,
      },
    ],
  },
  snippets: [
    {
      label: "Default",
      Code: () => generateAccordion(),
    },
  ],
};
