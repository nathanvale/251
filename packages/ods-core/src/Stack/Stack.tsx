import React, { ReactNode, Children } from "react";
import styled, { css } from "styled-components";
import { style, get, ResponsiveValue } from "styled-system";
import {
  AlignXType,
  ResponsiveSpace,
  ResponsiveProp,
  SpaceVariants,
} from "@origin-digital/ods-types";
import {
  mapToStyledSystem,
  cssLengthToString,
  alignToFlexAlign,
} from "@origin-digital/ods-helpers";
import { Box, BoxProps } from "../Box/Box";

export interface StackProps {
  children: ReactNode;
  space?: ResponsiveSpace;
  alignX?: ResponsiveProp<AlignXType>;
  dividers?: boolean;
  "data-id"?: string;
}

interface StackChildProps {
  divider?: boolean;
  space?: ResponsiveValue<SpaceVariants>;
}

const spacingTop = style({
  prop: "space",
  cssProperty: "margin-top",
  key: "space",
  transformValue: (n, scale) => cssLengthToString(get(scale, n)),
});

const spacingBottom = style({
  prop: "space",
  cssProperty: "margin-bottom",
  key: "space",
  transformValue: (n, scale) =>
    cssLengthToString(parseInt(get(scale, n), 10) - 1),
});

const divider = css<StackChildProps>`
  ${(props) =>
    props.divider &&
    `
      height: 1px;
      box-shadow: inset 0 0 0 1px ${props.theme.colors.grey200};
    `}
  ${(props) => props.divider && spacingBottom(props)}
`;

/**
 * How this CSS works
 * 1. Apply spacing and optional divider above every child starting from 2nd
 *    child
 * 2. Do not show spacing and divider after an empty child
 * 3. Show spacing and divider for all children following a non-empty child
 *    (ensures spacing/divider is applied when you have [non-empty, empty,
 *    non-empty]) NOTE: Divider height is set to 0.1px which gets rounded to 0.
 *    This is a css hack to ensure margin-top and margin-bottom are both
 *    applied on the pseudo-element. If height is set to 0, margin-bottom is
 *    not correctly applied.
 */
const StackChild = styled<StackChildProps & BoxProps>(Box)`
  &:empty {
    display: none;
  }
  &:empty + div:before {
    display: none;
  }
  &:not(:empty) ~ div:not(:empty):before {
    content: "";
    display: block;
    align-self: stretch;
    position: relative;
    height: 0.1px;
    ${divider}
    ${spacingTop}
  }
  &:nth-child(n + 2):before {
    content: "";
    display: block;
    align-self: stretch;
    position: relative;
    height: 0.1px;
    ${divider}
    ${spacingTop}
  }
`;

const defaultAlignX = "left";

export const Stack = ({
  children,
  dividers,
  space,
  "data-id": dataId,
  alignX = defaultAlignX,
}: StackProps) => {
  const stackItems = Children.toArray(children);

  return (
    <Box data-id={dataId} display="block" width="full">
      {stackItems.flatMap((child, index) => (
        // we set flex rules on each StackChild so that the divider can be full width
        <StackChild
          display={alignX === "left" ? "block" : "flex"}
          flexDirection={alignX === "left" ? undefined : "column"}
          alignItems={alignX === "left" ? undefined : alignToFlexAlign(alignX)}
          key={index}
          divider={dividers}
          data-id="stack-child"
          space={mapToStyledSystem(space)}
        >
          {child}
        </StackChild>
      ))}
    </Box>
  );
};

Stack.defaultProps = {
  "data-id": "stack",
  dividers: false,
  alignX: defaultAlignX,
  space: "none",
};

Stack.displayName = "Stack";
