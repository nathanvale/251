import React from 'react';
import {
  Box,
  Columns,
  Column,
  Stack,
  ColumnProps,
} from '@origin-digital/ods-core';
import {Props, Example, Page} from './_private';

export const ColumnDocument = () => (
  <Page>
    <Props<ColumnProps>
      componentName="Column"
      title="<Column/>"
      description="Column is a low-level atomic layout component. Its is used with its parent <Columns/> to provide 12 grid layout as well as flex box style layout."
      propDescriptions={{
        width: 'Some interesting facts about the width prop to go here...',
      }}
    />
    <Stack>
      <Example
        title="Evenly Distributed Columns"
        description="When a Column is given no width they evenly take up their available space in relation to other columns."
        Code={() => (
          <Columns space="small">
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
        title="Defining Column Widths"
        description="Bootstrap style 12 column layout can be achieved by passing in column widths."
        Code={() => (
          <Columns space="small">
            <Column width="1/12">
              <Box backgroundColor="blue" padding="medium" />
            </Column>
            <Column width="1/6">
              <Box backgroundColor="red" padding="medium" />
            </Column>
            <Column width="1/6">
              <Box backgroundColor="blue" padding="medium" />
            </Column>
            <Column width="1/12">
              <Box backgroundColor="red" padding="medium" />
            </Column>
            <Column width="1/2">
              <Box backgroundColor="blue" padding="medium" />
            </Column>
          </Columns>
        )}
      />
      <Example
        title="Mixing Column Widths With Content Width and Fluid Width"
        Code={() => (
          <Columns space="small">
            <Column>
              <Box backgroundColor="blue" padding="medium" />
            </Column>
            <Column width="1/3">
              <Box backgroundColor="red" padding="medium" />
            </Column>
            <Column width="1/4">
              <Box backgroundColor="orange" padding="medium" />
            </Column>
            <Column width="content">
              <Box backgroundColor="green" padding="medium" />
            </Column>
          </Columns>
        )}
      />
      <Example
        title="Stretching Space Between Columns"
        Code={() => (
          <Columns space="small">
            <Column width="content">
              <Box backgroundColor="blue" padding="medium" />
            </Column>
            <Column>
              <Box backgroundColor="blue" padding="medium" />
            </Column>
            <Column width="content">
              <Box backgroundColor="blue" padding="medium" />
            </Column>
          </Columns>
        )}
      />
    </Stack>
  </Page>
);
