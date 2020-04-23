/* eslint-disable jsx-a11y/anchor-has-content */
import { ComponentDocs } from "@origin-digital/ods-types";

export const docs: ComponentDocs = {
  category: "Interaction",
  componentName: "ChevronLinkRenderer",
  description:
    "ChevronLinkRenderer abstracts away our chevron link styling and chevron icon behaviour. This allows you to render something that looks like a ChevronLink but is semantically something different, e.g. React Router Link. If what you’re rendering is semantically a link or button, consider using a ChevronLink or ChevronButton instead.",
  propDescriptions: {},
  examples: [
    {
      label: "ChevronLink with custom React Router Link",
      playroom: false,
      codeString: `import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLinkRenderer, Text } from '@origin-digital/ods-core';

export default () => (
  <ChevronLinkRenderer tone="primary">
    {({ chevronLinkStyles, ChevronContainer }) => (
      <Link to="" className={chevronLinkStyles}>
        <ChevronContainer>Chevron link</ChevronContainer>
      </Link>
    )}
  </ChevronLinkRenderer>
);
`,
    },
  ],
  snippets: [],
};
