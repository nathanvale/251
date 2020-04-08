import styled, { css } from "styled-components";
import React from "react";
import {
  PaddingYVariants,
  SpaceVariants,
  ResponsiveProp,
  BackgroundVariant,
  FluidityVariant,
} from "@origin-digital/ods-types";
import { Box } from "../Box/Box";

export interface SectionProps {
  children: React.ReactNode;
  backgroundColor?: BackgroundVariant;
  "data-id"?: string;
  fluidity?: FluidityVariant;
  hideGutter?: boolean;
  stretchY?: boolean;
  paddingY?: PaddingYVariants;
}

const defaultPaddingY = "small";
const defaultFluidity = "off";
const defaultBackgroundColor = "white";

const cardPaddingYForVariant: Record<
  PaddingYVariants,
  ResponsiveProp<SpaceVariants>
> = {
  none: "none",
  small: ["xlarge", "xxlarge"],
  medium: {
    xs: "xlarge",
    sm: "xxlarge",
    lg: "xxxlarge",
  },
};

type StyledBoxProps = Omit<SectionProps, "paddingY">;

const StyledBox = styled(Box)<StyledBoxProps>`

  ${(p) =>
    p.fluidity !== "full-width"
      ? `max-width: ${p.theme.section.maxWidth.xl}px;`
      : ""}

  ${(p) =>
    p.fluidity === "off" &&
    css`
      @media (min-width: ${p.theme.breakpoints.sm}) {
        max-width: ${p.theme.section.maxWidth.sm}px;
      }
    `}

  ${(p) =>
    p.fluidity === "off" &&
    css`
      @media (min-width: ${p.theme.breakpoints.md}) {
        max-width: ${p.theme.section.maxWidth.md}px;
      }
    `}

  ${(p) =>
    p.fluidity === "off" &&
    css`
      @media (min-width: ${p.theme.breakpoints.lg}) {
        max-width: ${p.theme.section.maxWidth.lg}px;
      }
    `}

  ${(p) =>
    p.fluidity === "full-width"
      ? css`
          @media (min-width: ${p.theme.breakpoints.xl}) {
            max-width: 100%;
          }
        `
      : css`
          @media (min-width: ${p.theme.breakpoints.xl}) {
            max-width: ${p.theme.section.maxWidth.xl}px;
          }
        `}

`;

export const Section = ({
  stretchY,
  hideGutter,
  children,
  "data-id": dataId,
  paddingY = defaultPaddingY,
  backgroundColor,
  ...rest
}: SectionProps) => {
  return (
    <Box
      data-id={dataId}
      width="full"
      paddingY={cardPaddingYForVariant[paddingY]}
      display="flex"
      backgroundColor={backgroundColor}
      height={stretchY ? "full" : undefined}
    >
      <StyledBox
        {...rest}
        height={stretchY ? "full" : undefined}
        paddingX={hideGutter ? undefined : "medium"}
        width="full"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        {children}
      </StyledBox>
    </Box>
  );
};

Section.defaultProps = {
  "data-id": "section",
  backgroundColor: defaultBackgroundColor,
  paddingY: defaultPaddingY,
  fluidity: defaultFluidity,
  hideGutter: false,
  stretchY: false,
};

Section.displayName = "Section";
