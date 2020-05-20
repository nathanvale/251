import React from "react";
import { NormalisedPropType } from "@origin-digital/ods-scripts";
import { Stack, Text, Heading } from "@origin-digital/ods-core";
import { ComponentDocs } from "@origin-digital/ods-types";
import { PropType } from "../PropType/PropType";

export interface PropListViewProps {
  requiredProps: Array<{ propName: string; type: NormalisedPropType }>;
  optionalProps: Array<{ propName: string; type: NormalisedPropType }>;
  hasDefaultProps: boolean;
  propDescriptions?: Partial<Record<string, string>>;
  defaultProps: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
  specialOptionalProps?: ComponentDocs["specialOptionalProps"];
  specialRequiredProps?: ComponentDocs["specialRequiredProps"];
}

const Props = ({
  propName,
  type,
  description,
  defaultProps,
}: {
  propName: string;
  type: NormalisedPropType;
  description?: string;
  hasDefaultProps: boolean;
  defaultProps: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
}) => (
  <Stack space="xxsmall">
    <Text weight="medium">{propName}</Text>
    <Text>
      <PropType type={type} />
    </Text>
    {defaultProps[propName!] ? (
      <Text variant="body-small">Default value: {defaultProps[propName!]}</Text>
    ) : null}
    {description && <Text variant="body-small">{description}</Text>}
  </Stack>
);

export const PropListView = ({
  requiredProps,
  optionalProps,
  hasDefaultProps,
  defaultProps,
  propDescriptions = {},
  specialRequiredProps = [],
  specialOptionalProps = [],
}: PropListViewProps) => (
  <Stack space="small">
    {requiredProps.length > 0 && <Heading variant="h4">Required Props</Heading>}
    {requiredProps.map(({ propName, type }) => {
      return (
        <Props
          hasDefaultProps={hasDefaultProps}
          defaultProps={defaultProps}
          propName={propName}
          type={type}
          key={propName}
          description={propDescriptions[propName!]}
        />
      );
    })}
    {specialRequiredProps.length > 0 &&
      specialRequiredProps.map(({ name, type }) => {
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
    {optionalProps.length > 0 && <Heading variant="h4">Optional Props</Heading>}
    {optionalProps.map(({ propName, type }) => {
      return (
        <Props
          hasDefaultProps={hasDefaultProps}
          defaultProps={defaultProps}
          propName={propName}
          type={type}
          key={propName}
          description={propDescriptions[propName!]}
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
