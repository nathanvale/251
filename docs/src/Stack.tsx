import React from 'react';
import {Stack, Box, StackProps} from '@origin-digital/ods-core';
import {Props, Example, Page} from './_private';

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
            <Box padding="medium" backgroundColor="red" />
            <Box padding="medium" backgroundColor="orange" />
            <Box padding="medium" backgroundColor="blue" />
          </Stack>
        )}
      />
      <Example
        title="Distributed Space"
        description={`In order to distribute white space evenly between components pass in "space" with a tshirt size.`}
        Code={() => (
          <Stack space="xxlarge">
            <Box padding="medium" backgroundColor="red" />
            <Box padding="medium" backgroundColor="orange" />
            <Box padding="medium" backgroundColor="blue" />
          </Stack>
        )}
      />
      <Example
        title="Responsive Space on Mobile and Desktop Breakpoints"
        description="Distributed space can be controlled responsively by passing in an array of exactly two tshirt sizes - one for mobile and one for desktop. Open in Playroom to see the responsive behaviour of this example."
        Code={() => (
          <Stack space={['none', 'large']}>
            <Box backgroundColor="red" padding="medium" />
            <Box backgroundColor="orange" padding="medium" />
            <Box backgroundColor="blue" padding="medium" />
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
            <Box padding="medium" backgroundColor="red" />
            <Box padding="medium" backgroundColor="orange" />
            <Box padding="medium" backgroundColor="blue" />
          </Stack>
        )}
      />
      <Example
        title="Dividers"
        description={`Dividers between distributed children can be made visible when you pass in "dividers" as true.`}
        Code={() => (
          <Box padding="medium" backgroundColor="white">
            <Stack space="small" dividers>
              <Box padding="medium" backgroundColor="red" />
              <Box padding="medium" backgroundColor="orange" />
              <Box padding="medium" backgroundColor="blue" />
            </Stack>
          </Box>
        )}
      />
    </Stack>
  </Page>
);
