import React from "react";
import {NormalisedPropType} from "@origin-digital/ods-scripts";
import {Column, Text, Columns, Stack} from "@origin-digital/ods-core";
import {PropType} from "./PropType";

export interface PropListViewProps {
  requiredProps: Array<{propName: string; type: NormalisedPropType}>;
  optionalProps: Array<{propName: string; type: NormalisedPropType}>;
  propDescriptions?: Partial<Record<string, string>>;
  hasDefaultProps: boolean;
  defaultProps: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
}

const CommonColumns = ({
  type,
  propName,
  required,
  description,
}: {
  propName: string;
  type: NormalisedPropType;
  required?: boolean;
  description?: string;
}) => (
  <>
    <Column width="1/4">
      <Text>
        {propName}
        {required && "*"}
      </Text>
    </Column>
    <Column>
      <Stack space="small">
        <Text>
          <PropType type={type} />
        </Text>
        {description && <Text>{description}</Text>}
      </Stack>
    </Column>
  </>
);

const Props = ({
  propName,
  type,
  required,
  hasDefaultProps,
  defaultProps,
  description,
}: {
  propName: string;
  type: NormalisedPropType;
  required?: boolean;
  hasDefaultProps: boolean;
  description?: string;
  defaultProps: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
}) => {
  return hasDefaultProps ? (
    <Columns space="xlarge" key={propName}>
      <CommonColumns
        type={type}
        propName={propName}
        required={required}
        description={description}
      />
      <Column width="1/4">
        <Text>{defaultProps[propName!]}</Text>
      </Column>
    </Columns>
  ) : (
    <Columns space="xlarge" key={propName}>
      <CommonColumns
        type={type}
        propName={propName}
        required={required}
        description={description}
      />
    </Columns>
  );
};

export const PropTableView = ({
  requiredProps,
  optionalProps,
  hasDefaultProps,
  defaultProps,
  propDescriptions = {},
}: PropListViewProps) => (
  <Stack space="small" dividers>
    {requiredProps.map(({propName, type}) => {
      return (
        <Props
          required
          hasDefaultProps={hasDefaultProps}
          defaultProps={defaultProps}
          propName={propName}
          description={propDescriptions[propName!]}
          type={type}
          key={propName}
        />
      );
    })}
    {optionalProps.map(({propName, type}) => {
      return (
        <Props
          hasDefaultProps={hasDefaultProps}
          defaultProps={defaultProps}
          propName={propName}
          description={propDescriptions[propName!]}
          type={type}
          key={propName}
        />
      );
    })}
  </Stack>
);
