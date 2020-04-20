import React from "react";
import { NormalisedPropType } from "@origin-digital/ods-scripts";
import { Stack } from "@origin-digital/ods-core";
import { DocsText } from "@origin-digital/ods-lab";
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
  <Stack space={["small", "medium"]}>
    <DocsText weight="medium">{propName}</DocsText>
    <Stack space="small">
      <DocsText>
        <PropType type={type} />
      </DocsText>
      {description && <DocsText size="xxsmall">{description}</DocsText>}
    </Stack>
  </Stack>
);

export const PropListView = ({
  requiredProps,
  optionalProps,
  propDescriptions = {},
}: PropListViewProps) => (
  <Stack space="large">
    {requiredProps.length > 0 && (
      <DocsText weight="medium" color="grey600" size="xsmall">
        Required Props
      </DocsText>
    )}
    {requiredProps.map(({ propName, type }) => {
      return (
        <Props
          propName={propName}
          type={type}
          key={propName}
          description={propDescriptions[propName!]}
        />
      );
    })}
    {optionalProps.length > 0 && (
      <DocsText weight="medium" color="grey600" size="xsmall">
        Optional Props
      </DocsText>
    )}
    {optionalProps.map(({ propName, type }) => {
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
