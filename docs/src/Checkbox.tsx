import React from 'react';
import {Stack} from '@origin-digital/ods-core';
import {ContentSection, Checkbox} from '@origin-digital/ods-lab';
import {Props, Example, Page} from './_private';

export const CheckboxDocument = () => (
  <Page>
    <Props title="<Checkbox/>" componentName="Checkbox" description="" />
    <Stack>
      <Example
        Code={() => (
          <ContentSection backgroundColor="white">
            <Checkbox
              name="checkbox"
              label="checkbox"
              helperText="helperText"
              onChange={() => {}}
              checked={true}
              error={false}
            />
          </ContentSection>
        )}
      />
    </Stack>
  </Page>
);
