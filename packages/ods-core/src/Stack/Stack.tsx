import React, { ReactNode, Children } from "react";
import styled, { css } from "styled-components";
import { style, get, ResponsiveValue } from "styled-system";
import {
  AlignXType,
  ComponentBaseProps,
  SpaceVariants,
  ResponsiveProp,
  ResponsiveSpace,
  RequiredNoBaseProps,
} from "@origin-digital/ods-types";
import {
  mapToStyledSystem,
  cssLengthToString,
  alignXToFlexAlign,
} from "@origin-digital/ods-helpers";
import { Box, BoxProps } from "../Box";

const validStackComponents = ["div", "ol", "ul"] as const;

export interface StackProps extends ComponentBaseProps {
  children: ReactNode;
  component?: typeof validStackComponents[number];
  space?: ResponsiveSpace;
  alignX?: ResponsiveProp<AlignXType>;
  dividers?: boolean;
  "data-id"?: string;
  className?: string;
}
export interface StackChildProps {
  divider?: boolean;
  space?: ResponsiveValue<SpaceVariants>;
}

export const stackDefaultProps = {
  component: "div",
  "data-id": "stack",
  alignX: "left",
  space: ["medium", "large"],
} as RequiredNoBaseProps<StackProps>;

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
export const StackChild = styled<StackChildProps & BoxProps>(Box)`
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

export const Stack = ({
  children,
  component = stackDefaultProps.component,
  dividers,
  space = stackDefaultProps.space,
  "data-id": dataId,
  alignX = stackDefaultProps.alignX,
  className,
}: StackProps) => {
  const stackItems = Children.toArray(children);

  const isList = component === "ol" || component === "ul";
  const stackItemComponent = isList ? "li" : "div";

  return (
    <Box
      className={className}
      component={component}
      data-id={dataId}
      display="block"
      width="full"
    >
      {stackItems.flatMap((child, index) => (
        // we set flex rules on each StackChild so that the divider can be full width
        <StackChild
          component={stackItemComponent}
          display={
            alignX === "left" ? (isList ? "list-item" : "block") : "flex"
          }
          flexDirection={alignX === "left" ? undefined : "column"}
          alignItems={alignX === "left" ? undefined : alignXToFlexAlign(alignX)}
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

Stack.defaultProps = stackDefaultProps;
Stack.displayName = "Stack";
