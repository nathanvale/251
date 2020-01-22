import React from 'react';
import {Stack, Placeholder, PlaceholderProps} from '@origin-digital/ods-core';
import {Props, Example, Page} from './_private';

export const PlaceholderDocument = () => (
  <Page>
    <Props<PlaceholderProps>
      title="<Placeholder/>"
      componentName="Placeholder"
      description="Placeholders are helpful for laying out placeholders for future content."
      propDescriptions={{}}
    />
    <Stack>
      <Example Code={() => <Placeholder height="300px">Content</Placeholder>} />
    </Stack>
  </Page>
);
