/* eslint-disable react/display-name */
import React from 'react';
import {ComponentDocs} from '../../../../docs/src/types';
import {ContentSection, Checkbox, CheckboxProps} from '..';

export const docs: ComponentDocs<CheckboxProps> = {
  category: 'Experimental',
  componentName: 'Checkbox',
  description: '',
  propDescriptions: {},
  migrationGuide: false,
  examples: [
    {
      Code: () => (
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
      ),
    },
  ],
};
