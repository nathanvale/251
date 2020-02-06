/* eslint-disable react/display-name */
import React from 'react';
import {ComponentDocs} from '../../../../docs/src/types';
import {Placeholder, PlaceholderProps} from '..';

export const docs: ComponentDocs<PlaceholderProps> = {
  category: 'Layout',
  componentName: 'Placeholder',
  description:
    'Placeholders are helpful for laying out placeholders for future content.',
  propDescriptions: {},
  migrationGuide: false,
  examples: [
    {
      Code: () => <Placeholder height="300px">Content</Placeholder>,
    },
  ],
};
