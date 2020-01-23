import React from 'react';
import {Stack, Divider, Box} from '@origin-digital/ods-core';
import {Props, Example, Page} from './_private';

export const DividerDocument = () => (
  <Page>
    <Props
      title="<Divider/>"
      componentName="Divider"
      description="Dividers are useful for separating content."
    />
    <Stack>
      <Example
        Code={() => (
          <Box backgroundColor="white" padding="xxlarge">
            <Divider />
          </Box>
        )}
      />
    </Stack>
  </Page>
);
