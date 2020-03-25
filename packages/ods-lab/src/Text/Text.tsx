import React, { ReactNode, ReactType } from "react";
import styled from "styled-components";
import { Box, BoxProps } from "@origin-digital/ods-core";
import { Color } from "@origin-digital/ods-types";
import { style } from "styled-system";

import { basekick } from "../_private/hooks/typography/basekick";

export const textColor = style({
  prop: "color",
  key: "colors",
});

/* import {useText} from './_private/hooks/typography/use-text'; */

export interface TextProps {
  children?: ReactNode;
  component?: ReactType;
  size?:
    | "xxxsmall"
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "xxxlarge";
  color?: keyof Color;
  weight?: "regular" | "medium";
  baseline?: boolean;
  className?: string;
  align?: BoxProps["textAlign"];
  dangerouslySetInnerHTML?: any;
}

const StyledBox = styled(Box)<any>`
  ${({ theme, size }) => {
    return basekick({
      baseFontSize: 1,
      typeSizeModifier: theme.typography.text[size].size,
      typeRowSpan: theme.typography.text[size].rows,
      descenderHeightScale: theme.typography.descenderHeightScale,
      capHeight: theme.typography.capHeightScale,
      gridRowHeight: theme.typography.gridRow,
    });
  }};
  font-family: gordita, sans-serif;
  font-weight: ${({ theme, weight }) => theme.typography.weight[weight]};
  ${textColor};
`;

export const Text = ({
  children,
  component = "span",
  size = "xxsmall",
  color = "grey",
  weight = "regular",
  align,
  className,
  dangerouslySetInnerHTML,
}: TextProps) => {
  return (
    <StyledBox
      data-id="text"
      display="block"
      component={component}
      color={color}
      className={className}
      textAlign={align}
      size={size}
      weight={weight}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </StyledBox>
  );
};

Text.defaultValues = {
  color: "grey",
};

Text.displayName = "Text";
