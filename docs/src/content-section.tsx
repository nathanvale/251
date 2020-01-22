import React from 'react';
import {Placeholder} from '@origin-digital/ods-core';
import {
  ContentSection,
  ContentSectionProps,
} from '@origin-digital/ods-patterns';
import {Props, Example, Page} from './_private';

export const ContentSectionDocument = () => (
  <Page>
    <Props<ContentSectionProps>
      componentName="ContentSection"
      title="<ContentSection/>"
      description="ContentSection is a pattern layout component that uses Section to horizontally center and responsively set full width or max-widths across 5 breakpoints. It also implements responsive padding for its content at mobile and desktop breakpoints. Open the example in Playroom to see the responsive behaviour of this component."
      propDescriptions={{}}
    />
    <Example
      noSection
      Code={() => (
        <ContentSection backgroundColor="white">
          <Placeholder height="300px">Content</Placeholder>
        </ContentSection>
      )}
    />
  </Page>
);
