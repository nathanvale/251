import React from "react";
import { NormalisedPropType, ComponentDocs } from "@origin-digital/ods-types";
import { Column, Columns, Stack, Text, Box } from "@origin-digital/ods-core";
import { PropType } from "../PropType/PropType";
import { Monospace } from "../Monospace/Monospace";

export interface PropListViewProps {
  requiredProps: Array<{ propName: string; type: NormalisedPropType }>;
  optionalProps: Array<{ propName: string; type: NormalisedPropType }>;
  propDescriptions?: Partial<Record<string, string>>;
  hasDefaultProps: boolean;
  defaultProps: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
  specialOptionalProps?: ComponentDocs["specialOptionalProps"];
  specialRequiredProps?: ComponentDocs["specialRequiredProps"];
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
    <Column width="content">
      <Box style={{ width: "150px" }}>
        <Monospace>
          {propName}
          {required && "*"}
        </Monospace>
      </Box>
    </Column>
    <Column>
      <Stack space="xsmall">
        <Monospace>
          <TypeRenderer propName={propName} type={type} />
        </Monospace>
        {description && <Text variant="body-small">{description}</Text>}
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
      <Column width="content">
        <Monospace>{defaultProps[propName!]}</Monospace>
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
  specialRequiredProps = [],
  specialOptionalProps = [],
}: PropListViewProps) => (
  <Stack space="xsmall" dividers>
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
    {specialRequiredProps.length > 0 &&
      specialRequiredProps.map(({ name, type }) => {
        return (
          <Props
            required
            hasDefaultProps={hasDefaultProps}
            defaultProps={defaultProps}
            propName={name}
            description={type.description}
            type={type.label}
            key={name}
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
    {specialOptionalProps.length > 0 &&
      specialOptionalProps.map(({ name, type }) => {
        return (
          <Props
            hasDefaultProps={hasDefaultProps}
            defaultProps={defaultProps}
            propName={name}
            description={type.description}
            type={type.label}
            key={name}
          />
        );
      })}
  </Stack>
);
