import React, { Children } from "react";
import {
  ResponsiveSpace,
  CollapsibleAlignmentProps,
  SpaceVariants,
  ComponentBaseProps,
} from "@origin-digital/ods-types";
import flattenChildren from "react-keyed-flatten-children";
import {
  cssLengthToString,
  mapToStyledSystem,
} from "@origin-digital/ods-helpers";
import styled, { css } from "styled-components";
import { style, get, ResponsiveValue } from "styled-system";
import { resolveCollapsibleAlignmentProps } from "../_private/resolveCollapsibleAlignmentProps";
import { Box } from "../Box";

export interface InlineProps
  extends CollapsibleAlignmentProps,
    ComponentBaseProps {
  space?: ResponsiveSpace;
  children: React.ReactNode;
}

interface OuterContainerProps {
  space: ResponsiveValue<SpaceVariants>;
}

interface InnerContainerProps {
  space: ResponsiveValue<SpaceVariants>;
}

const preventCollapse = 1;

const base = css`
  padding-top: ${preventCollapse}px;
  &:before {
    content: "";
    display: block;
  }
`;

const marginTop = style({
  prop: "space",
  cssProperty: "margin-top",
  key: "space",
  transformValue: (n, scale) =>
    cssLengthToString(0 - parseInt(get(scale, n), 10) - preventCollapse),
});

const marginLeft = style({
  prop: "space",
  cssProperty: "margin-left",
  key: "space",
  transformValue: (n, scale) =>
    cssLengthToString(0 - parseInt(get(scale, n), 10)),
});

const negativeMarginTop = css`
  &:before {
    ${marginTop}
  }
`;

const negativeMarginLeft = css`
  ${marginLeft}
`;

const OuterContainer = styled(Box)<OuterContainerProps>`
  ${base}
  ${negativeMarginTop}
`;
export const InnerContainer = styled(Box)<InnerContainerProps>`
  min-width: 100%;
  ${negativeMarginLeft}
`;
const ChildContainer = styled(Box)`
  min-width: 0;
`;

const defaultSpace = "none";

export const Inline = ({
  "data-id": dataId,
  children,
  space = defaultSpace,
  alignX,
  alignY,
  collapseBelow,
  ...rest
}: InlineProps) => {
  const {
    collapsibleAlignmentProps,
    collapsibleAlignmentChildProps,
  } = resolveCollapsibleAlignmentProps({
    alignX,
    alignY,
    collapseBelow,
  });

  return (
    <OuterContainer
      space={mapToStyledSystem(space) || "none"}
      data-id={dataId}
      {...rest}
    >
      <InnerContainer
        space={mapToStyledSystem(space) || "none"}
        flexWrap="wrap"
        {...collapsibleAlignmentProps}
      >
        {Children.map(flattenChildren(children), (child) =>
          child !== null && child !== undefined ? (
            <ChildContainer
              paddingLeft={space}
              paddingTop={space}
              {...collapsibleAlignmentChildProps}
            >
              {child}
            </ChildContainer>
          ) : null
        )}
      </InnerContainer>
    </OuterContainer>
  );
};

Inline.displayName = "Inline";
Inline.defaultProps = {
  "data-id": "inline",
  space: "none",
  alignX: "left",
  alignY: "top",
};
