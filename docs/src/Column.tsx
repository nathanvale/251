import React from 'react';
import {
  Columns,
  Column,
  Stack,
  ColumnProps,
  Placeholder,
} from '@origin-digital/ods-core';
import {Props, Example, Page} from './_private';

export const ColumnDocument = () => (
  <Page>
    <Props<ColumnProps>
      componentName="Column"
      title="<Column/>"
      description="Column is a low-level atomic layout component. Its is used with its parent <Columns/> to provide 12 grid layout as well as flex Placeholder style layout."
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
              <Placeholder backgroundColor="blue" />
            </Column>
            <Column>
              <Placeholder backgroundColor="blue" />
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
              <Placeholder backgroundColor="blue" />
            </Column>
            <Column width="1/6">
              <Placeholder backgroundColor="red" />
            </Column>
            <Column width="1/6">
              <Placeholder backgroundColor="blue" />
            </Column>
            <Column width="1/12">
              <Placeholder backgroundColor="red" />
            </Column>
            <Column width="1/2">
              <Placeholder backgroundColor="blue" />
            </Column>
          </Columns>
        )}
      />
      <Example
        title="Mixing Column Widths With Content Width and Fluid Width"
        Code={() => (
          <Columns space="small">
            <Column>
              <Placeholder backgroundColor="blue" />
            </Column>
            <Column width="1/3">
              <Placeholder backgroundColor="red" />
            </Column>
            <Column width="1/4">
              <Placeholder backgroundColor="orange" />
            </Column>
            <Column width="content">
              <Placeholder backgroundColor="green" />
            </Column>
          </Columns>
        )}
      />
      <Example
        title="Stretching Space Between Columns"
        Code={() => (
          <Columns space="small">
            <Column width="content">
              <Placeholder backgroundColor="blue" />
            </Column>
            <Column>
              <Placeholder backgroundColor="blue" />
            </Column>
            <Column width="content">
              <Placeholder backgroundColor="blue" />
            </Column>
          </Columns>
        )}
      />
    </Stack>
  </Page>
);
