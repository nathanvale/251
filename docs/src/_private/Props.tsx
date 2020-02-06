/* eslint-disable import/no-duplicates */
/* eslint-disable no-duplicate-imports */
import React, {FC} from 'react';
import partition from 'lodash/partition';
import mapValues from 'lodash/mapValues';
import isEmpty from 'lodash/isEmpty';
import * as Core from '@origin-digital/ods-core';
import * as Experimental from '@origin-digital/ods-lab';
import styled from 'styled-components';
import {maxWidth, MaxWidthProps} from 'styled-system';
import {ContentSection} from '@origin-digital/ods-lab';
import {NormalisedInterface} from '@origin-digital/ods-scripts';
import {
  Stack,
  Text,
  Link,
  Columns,
  Column,
  Box,
} from '@origin-digital/ods-core';
import {CSSDebugButton} from '@origin-digital/ods-devtools';
import {IconFlipToBack} from '@origin-digital/ods-icons';
import componentDocs from '../componentDocs.json';
import {ComponentDocs} from '../types';

import {PropListView} from './PropListView';
import {PropTableView} from './PropTableView';

interface PropsProps<T> {
  componentName: ComponentDocs['componentName'];
  description: ComponentDocs['description'];
  propDescriptions: ComponentDocs<T>['propDescriptions'];
  variant?: ComponentDocs['variant'];
}

type ComponentName = keyof typeof componentDocs;

const docs = componentDocs as Record<ComponentName, NormalisedInterface>;

const isValidComponentName = (
  componentName: string,
): componentName is ComponentName => {
  return componentDocs.hasOwnProperty(componentName);
};

const CommonColumns = () => (
  <>
    <Column width="1/4">
      <Text size="xsmall" color="grey56" weight="medium">
        Name
      </Text>
    </Column>
    <Column>
      <Text size="xsmall" color="grey56" weight="medium">
        Type
      </Text>
    </Column>
  </>
);

const StyledBox = styled(Box)<MaxWidthProps>`
  ${maxWidth}
`;

const ColumnsHeader = ({hasDefaultProps}: {hasDefaultProps: boolean}) =>
  hasDefaultProps ? (
    <Columns space="xlarge">
      <CommonColumns />
      <Column width="1/4">
        <Text size="xsmall" color="grey56" weight="medium">
          Default
        </Text>
      </Column>
    </Columns>
  ) : (
    <Columns space="xlarge">
      <CommonColumns />
    </Columns>
  );

export function Props<T = {}>({
  description,
  componentName,
  variant,
  propDescriptions,
}: PropsProps<T>) {
  if (!isValidComponentName(componentName)) {
    return null;
  }
  const {props} = docs[componentName];

  const [requiredProps, optionalProps] = partition(
    props,
    prop => prop.required,
  );

  const components = {...Core, ...Experimental};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component = (components as Record<string, FC<any>>)[componentName];

  const defaultProps = mapValues(
    (component && component.defaultProps) || {},
    value => {
      if (typeof value === 'boolean') {
        return Boolean(value).toString();
      }
      if (typeof value === 'string') {
        return JSON.stringify(value, null, 2);
      }
      if (typeof value === 'object') {
        return JSON.stringify(value, null, 2);
      }
      return value;
    },
  );

  const hasDefaultProps = !isEmpty(defaultProps);

  return (
    <ContentSection backgroundColor="white">
      <StyledBox maxWidth={[null, null, '75%', '66%']}>
        <Stack space="xxlarge">
          <Text color="grey56" size="xlarge">
            {`<${componentName}/>`}
          </Text>
          {description && (
            <Text color="grey56" size="medium">
              {description}
            </Text>
          )}
          <Stack dividers space="medium">
            {variant !== 'list' ? (
              <ColumnsHeader hasDefaultProps={hasDefaultProps} />
            ) : null}
            {requiredProps.length === 0 && optionalProps.length === 0 ? null : (
              <Stack space="medium" dividers>
                {variant === 'list' ? (
                  <PropListView
                    defaultProps={defaultProps}
                    hasDefaultProps={hasDefaultProps}
                    requiredProps={requiredProps}
                    optionalProps={optionalProps}
                    propDescriptions={propDescriptions}
                  />
                ) : (
                  <>
                    <PropTableView
                      defaultProps={defaultProps}
                      hasDefaultProps={hasDefaultProps}
                      requiredProps={requiredProps}
                      optionalProps={optionalProps}
                      propDescriptions={propDescriptions}
                    />
                  </>
                )}

                <Box style={{marginBottom: -20}}>
                  <Columns>
                    <Column width="content">
                      {requiredProps.length > 0 && (
                        <Text size="xxxsmall">* Required Property</Text>
                      )}
                    </Column>
                    <Column>
                      <Box />
                    </Column>
                    <Column width="content">
                      <CSSDebugButton Button={Link} Icon={<IconFlipToBack />} />
                    </Column>
                  </Columns>
                </Box>
              </Stack>
            )}
          </Stack>
        </Stack>
      </StyledBox>
    </ContentSection>
  );
}

Props.defaultProps = {
  variant: 'table',
};
