import React from 'react';
import {NormalisedPropType} from '@origin-digital/ods-scripts';
import {Text, Stack} from '@origin-digital/ods-core';
import {PropType} from './PropType';

export interface PropListViewProps {
  requiredProps: Array<{propName: string; type: NormalisedPropType}>;
  optionalProps: Array<{propName: string; type: NormalisedPropType}>;
  hasDefaultProps: boolean;
  propDescriptions?: Partial<Record<string, string>>;
  defaultProps: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
}

const Props = ({
  propName,
  type,
  description,
}: {
  propName: string;
  type: NormalisedPropType;
  description?: string;
}) => (
  <Stack space="xsmall">
    <Text weight="medium">{propName}</Text>
    <Stack space="small">
      <Text>
        <PropType type={type} />
      </Text>
      {description && <Text>{description}</Text>}
    </Stack>
  </Stack>
);

export const PropListView = ({
  requiredProps,
  optionalProps,
  propDescriptions = {},
}: PropListViewProps) => (
  <Stack space="small">
    {requiredProps.map(({propName, type}) => {
      return (
        <Props
          propName={propName}
          type={type}
          key={propName}
          description={propDescriptions[propName!]}
        />
      );
    })}
    {optionalProps.map(({propName, type}) => {
      return (
        <Props
          propName={propName}
          type={type}
          key={propName}
          description={propDescriptions[propName!]}
        />
      );
    })}
  </Stack>
);
