import React from 'react';
import {
  Box,
  Columns,
  Column,
  Stack,
  ColumnsProps,
} from '@origin-digital/ods-core';
import {Props, Example, Page} from './_private';

export const ColumnsDocument = () => (
  <Page>
    <Props<ColumnsProps>
      title="<Columns/>"
      componentName="Columns"
      description="Columns is a low-level atomic layout component. Its main concerns are laying out columns in a 12 grid layout and responsively stacking them at a set breakpoint. Open the examples in Playroom to see the responsive behaviour of this component."
      propDescriptions={{}}
    />
    <Stack>
      <Example
        title="Responsively Collapsing Columns to a Stack"
        description="Columns can collapse from a horizontal layout to a vertical stack by passing in a 'collapseBelow' breakpoint. In this example all columns below the 'sm' breakpoint will collapse to a stack. Open in Playroom to see the responsive behaviour of this example."
        Code={() => (
          <Columns space="small" collapseBelow="sm">
            <Column>
              <Box backgroundColor="blue" padding="medium" />
            </Column>
            <Column>
              <Box backgroundColor="blue" padding="medium" />
            </Column>
          </Columns>
        )}
      />
      <Example
        title="Responsively Collapsing Columns Below Desktop"
        description="In this exmaple columns collapse to a stack below the desktop breakpoint. Open in Playroom to see the responsive behaviour of this example."
        Code={() => (
          <Columns space="small" collapseBelow="lg">
            <Column>
              <Box backgroundColor="blue" padding="medium" />
            </Column>
            <Column>
              <Box backgroundColor="blue" padding="medium" />
            </Column>
          </Columns>
        )}
      />
      <Example
        title="Responsive Space on Mobile and Desktop Breakpoints"
        description="Distributed space can be controlled responsively by passing in an array of exactly two tshirt sizes - one for mobile and one for desktop. Open in Playroom to see the responsive behaviour of this example."
        Code={() => (
          <Columns space={['small', 'xxxlarge']}>
            <Column>
              <Box backgroundColor="blue" padding="medium" />
            </Column>
            <Column>
              <Box backgroundColor="blue" padding="medium" />
            </Column>
          </Columns>
        )}
      />
      <Example
        title="Responsive Space Across All Five Breakpoints"
        description="For more granular control across all 5 breakpoints, xs, sm, md, lg and xl, distributed space can be controlled responsively by passing in an object with breakpoints as keys and tshirt sizes as values. Open in Playroom to see the responsive behaviour of this example."
        Code={() => (
          <Columns
            space={{
              xs: 'none',
              sm: 'small',
              md: 'medium',
              lg: 'large',
              xl: 'xxlarge',
            }}
          >
            <Column>
              <Box backgroundColor="blue" padding="medium" />
            </Column>
            <Column>
              <Box backgroundColor="blue" padding="medium" />
            </Column>
          </Columns>
        )}
      />
      <Example
        title="Vertical Alignment"
        description="Use alignY to align the child Column components top, center (defalut) or bottom"
        Code={() => (
          <Columns space="small" collapseBelow="sm" alignY="bottom">
            <Column>
              <Box backgroundColor="blue" padding="xsmall" />
            </Column>
            <Column>
              <Box backgroundColor="blue" padding="large" />
            </Column>
          </Columns>
        )}
      />
    </Stack>
  </Page>
);
