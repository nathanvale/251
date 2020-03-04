import React, {ReactNode, ReactType} from "react";
import styled from "styled-components";
import {Box, BoxProps} from "@origin-digital/ods-core";
import {Color} from "@origin-digital/ods-types";
import {style} from "styled-system";

import {basekick} from "../_private/hooks/typography/basekick";

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
}

export const Text = ({
  children,
  component = "span",
  size = "xxsmall",
  color = "grey",
  weight = "regular",
  align,

  className,
}: TextProps) => {
  const StyledBox = styled(Box)`
    ${p => {
      return basekick({
        baseFontSize: 1,
        typeSizeModifier: p.theme.typography.text[size].size,
        typeRowSpan: p.theme.typography.text[size].rows,
        descenderHeightScale: p.theme.typography.descenderHeightScale,
        capHeight: p.theme.typography.capHeightScale,
        gridRowHeight: p.theme.typography.gridRow,
      });
    }}
    font-family: gordita, sans-serif;
    font-weight: ${p => p.theme.typography.weight[weight]};
    ${textColor}
  `;
  return (
    <StyledBox
      data-id="text"
      display="block"
      component={component}
      color={color}
      className={className}
      textAlign={align}
    >
      {children}
    </StyledBox>
  );
};

Text.defaultValues = {
  color: "grey",
};

Text.displayName = "Text";
