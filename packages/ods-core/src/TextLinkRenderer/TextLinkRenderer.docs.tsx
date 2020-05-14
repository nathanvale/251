/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Text } from "../Text/Text";
import { TextLinkRenderer } from "./TextLinkRenderer";

export const docs: ComponentDocs = {
  category: "Interaction",
  componentName: "TextLinkRenderer",
  description:
    "TextLinkRenderer abstracts away our link styling. This allows you to render something that looks like a TextLink but is semantically something different, e.g. a button. If what you’re rendering is semantically a link, consider using a TextLink instead.",
  propDescriptions: {},
  examples: {
    default: {
      playroom: false,
      Code: () => (
        <Text>
          Even though it looks like a link, the last word is a{" "}
          <TextLinkRenderer>
            {({ textLinkStyles }) => (
              <button className={textLinkStyles}>button</button>
            )}
          </TextLinkRenderer>
          .
        </Text>
      ),
      codeString: `import React from 'react';
import { TextLinkRenderer, Text, Box } from '@origin-digital/ods-core';

export default () => (
  <Text>
    Even though it looks like a link, the last word is a
    <TextLinkRenderer>
      {({ textLinkStyles }) => <button className={textLinkStyles}>button</button>}
    </TextLinkRenderer>
    .
  </Text>
);`,
    },
    additional: [
      {
        label: "TextLink with custom React Router Link",
        playroom: false,
        codeString: `import React from 'react';
import { Link } from 'react-router-dom';
import { TextLinkRenderer, Text } from '@origin-digital/ods-core';

export default () => (
  <Text>
    The last word of this sentence is a
    <TextLinkRenderer>
      {({ textLinkStyles }) => (
        <Link to="" className={textLinkStyles}>
          link
        </Link>
      )}
    </TextLinkRenderer>
  </Text>
);
`,
      },
    ],
  },
  snippets: [],
};
