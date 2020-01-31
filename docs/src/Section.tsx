import React from 'react';
import {
  Section,
  Stack,
  SectionProps,
  Placeholder,
} from '@origin-digital/ods-core';
import {Props, Example, Page} from './_private';

export const SectionDocument = () => (
  <Page>
    <Props<SectionProps>
      title="<Section/>"
      componentName="Section"
      description="Section is a low-level atomic layout component. Its main concerns are horizontally centering and responsively setting full width or max-widths across 5 breakpoints. Before using this component please consider other section pattern components such as ContentSection or CardStackSection. Open the examples in Playroom to see the responsive behaviour of this component."
      propDescriptions={{}}
    />
    <Stack>
      <Example
        noSection
        title="Background color"
        description={`A background color can be set and by default <Section/> has a background color of transparent.`}
        Code={() => (
          <Section backgroundColor="white">
            <Placeholder backgroundColor="white">Content</Placeholder>
          </Section>
        )}
      />
      <Example
        noSection
        title="Responsive max-widths"
        description={`By default <Section/> has a fluidity of "off". A max-width is applied at every media query breakpoint except for mobile. At the mobile breakpoint, the width is fluid, 100%.`}
        Code={() => (
          <Section>
            <Placeholder backgroundColor="lightOrange">Content</Placeholder>
          </Section>
        )}
      />
      <Example
        noSection
        title="Fluidity up to 1140px wide"
        description={`When <Section/> has a fluidity of "max-width-at-xl". Its width is 100% of its container with a restriction of 1140px wide.`}
        Code={() => (
          <Section fluidity="max-width-at-xl">
            <Placeholder backgroundColor="lightOrange">Content</Placeholder>
          </Section>
        )}
      />
      <Example
        noSection
        title="Full Width Fluidity"
        description={`A fluidity of "full-width" enables a width of 100% of its container with no restrictions at any breakpoint.`}
        Code={() => (
          <Section fluidity="full-width">
            <Placeholder backgroundColor="lightOrange">Content</Placeholder>
          </Section>
        )}
      />
      <Example
        noSection
        title="Hiding Gutters"
        description={`By default, there is a gutter or left and right padding. In cases where you want your content to extend to the boundaries of your parent container pass in "hideGutter={true}".`}
        Code={() => (
          <Section hideGutter fluidity="full-width">
            <Placeholder backgroundColor="lightOrange">Content</Placeholder>
          </Section>
        )}
      />
      <Example
        noSection
        stretch
        title="Vertically Stretching"
        description={`In situations where you would like to vertically stretch Section to its parent height pass in "stretchY."`}
        Code={() => (
          <Section stretchY>
            <Placeholder height="100%" backgroundColor="lightOrange">
              Content
            </Placeholder>
          </Section>
        )}
      />
    </Stack>
  </Page>
);
