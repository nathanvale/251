import React from "react";
import { NormalisedPropType } from "@origin-digital/ods-scripts";
import { Column, Columns, Stack } from "@origin-digital/ods-core";
import { Text } from "@origin-digital/ods-lab";
import { PropType } from "../PropType/PropType";

export interface PropListViewProps {
  requiredProps: Array<{ propName: string; type: NormalisedPropType }>;
  optionalProps: Array<{ propName: string; type: NormalisedPropType }>;
  propDescriptions?: Partial<Record<string, string>>;
  hasDefaultProps: boolean;
  defaultProps: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
}

const TypeRenderer = ({
  propName,
  type,
}: {
  propName: string;
  type: NormalisedPropType;
}) =>
  propName.toLocaleLowerCase() === "muiprops" ? (
    <> - </>
  ) : (
    <PropType type={type} />
  );

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
      <Text size="xxsmall">
        {propName}
        {required && "*"}
      </Text>
    </Column>
    <Column>
      <Stack space="medium">
        <Text size="xxsmall">
          <TypeRenderer propName={propName} type={type} />
        </Text>
        {description && <Text size="xxxsmall">{description}</Text>}
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
    {requiredProps.map(({ propName, type }) => {
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
    {optionalProps.map(({ propName, type }) => {
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
