import React from 'react';
import {Stack, Divider} from '@origin-digital/ods-core';
import {ContentSection} from '@origin-digital/ods-lab';
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
          <ContentSection backgroundColor="white">
            <Divider />
          </ContentSection>
        )}
      />
    </Stack>
  </Page>
);
