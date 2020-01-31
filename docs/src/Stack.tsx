import React from 'react';
import {Stack, StackProps, Placeholder} from '@origin-digital/ods-core';
import {Props, Example, Page} from './_private';
import {ContentSection} from '@origin-digital/ods-lab';

export const StackDocument = () => (
  <Page>
    <Props<StackProps>
      title="<Stack/>"
      componentName="Stack"
      description="Stack is a low-level atomic layout component. Its main concerns are vertically stacking and evenly distributing white space between its children. Open the examples in Playroom to see the responsive behaviour of this component."
      propDescriptions={{}}
    />
    <Stack>
      <Example
        title="Default Behaviour"
        description="By default <Stack/> vertically stacks siblings without any space between them."
        Code={() => (
          <Stack>
            <Placeholder backgroundColor="red" />
            <Placeholder backgroundColor="orange" />
            <Placeholder backgroundColor="blue" />
          </Stack>
        )}
      />
      <Example
        title="Distributed Space"
        description={`In order to distribute white space evenly between components pass in "space" with a tshirt size.`}
        Code={() => (
          <Stack space="xxlarge">
            <Placeholder backgroundColor="red" />
            <Placeholder backgroundColor="orange" />
            <Placeholder backgroundColor="blue" />
          </Stack>
        )}
      />
      <Example
        title="Responsive Space on Mobile and Desktop Breakpoints"
        description="Distributed space can be controlled responsively by passing in an array of exactly two tshirt sizes - one for mobile and one for desktop. Open in Playroom to see the responsive behaviour of this example."
        Code={() => (
          <Stack space={['none', 'large']}>
            <Placeholder backgroundColor="red" />
            <Placeholder backgroundColor="orange" />
            <Placeholder backgroundColor="blue" />
          </Stack>
        )}
      />
      <Example
        title="Responsive Space Across All Five Breakpoints"
        description="For more granular control across all 5 breakpoints, xs, sm, md, lg and xl, distributed space can be controlled responsively by passing in an object with breakpoints as keys and tshirt sizes as values. Open in Playroom to see the responsive behaviour of this example."
        Code={() => (
          <Stack
            space={{
              xs: 'none',
              sm: 'small',
              md: 'medium',
              lg: 'large',
              xl: 'xxlarge',
            }}
          >
            <Placeholder backgroundColor="red" />
            <Placeholder backgroundColor="orange" />
            <Placeholder backgroundColor="blue" />
          </Stack>
        )}
      />
      <Example
        title="Dividers"
        description={`Dividers between distributed children can be made visible when you pass in "dividers" as true.`}
        Code={() => (
          <ContentSection backgroundColor="white">
            <Stack space="small" dividers>
              <Placeholder backgroundColor="red" />
              <Placeholder backgroundColor="orange" />
              <Placeholder backgroundColor="blue" />
            </Stack>
          </ContentSection>
        )}
      />
      <Example
        title="Horizontal Alignment"
        description={`With alignX one can decide to align the children of a Stack component, to left, right, center or stretch (default).`}
        Code={() => (
          <ContentSection backgroundColor="white">
            <Stack space="small" dividers alignX="center">
              <Placeholder backgroundColor="red" />
              <Placeholder backgroundColor="orange" />
              <Placeholder backgroundColor="blue" />
            </Stack>
          </ContentSection>
        )}
      />
    </Stack>
  </Page>
);
