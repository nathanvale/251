import styled, {
  css,
  StyledProps,
  InterpolationValue,
} from "styled-components";
import React from "react";
import {
  PaddingYVariants,
  SpaceVariants,
  ResponsiveProp,
  CardBackgroundVariant,
  FluidityVariant,
  ResponsiveSpace,
  BreakpointVariants,
  ComponentBaseProps,
} from "@origin-digital/ods-types";
import { Box } from "../Box";

export interface SectionProps extends Omit<ComponentBaseProps, "className"> {
  children: React.ReactNode;
  backgroundColor?: CardBackgroundVariant;
  fluidity?: FluidityVariant;
  hideGutter?: ResponsiveProp<boolean>;
  stretchY?: boolean;
  paddingY?: PaddingYVariants;
}

const defaultPaddingY = "small";
const defaultFluidity = "off";
const defaultBackgroundColor = "white";
const defaultHideGutter = false;

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
const getStylesForbreakpoint = (
  p: StyledProps<StyledBoxProps>,
  breakpoint: BreakpointVariants
): InterpolationValue[] => {
  const fluidity = p.fluidity as Record<BreakpointVariants, boolean>;
  return fluidity[breakpoint]
    ? css`
        @media (min-width: ${p.theme.breakpoints[breakpoint]}) {
          max-width: 100%;
        }
      `
    : css`
        @media (min-width: ${p.theme.breakpoints[breakpoint]}) {
          max-width: ${p.theme.section.maxWidth[breakpoint]}px;
        }
      `;
};

const StyledBox = styled(Box)<StyledBoxProps>`
${(p) =>
  !Object.values(p.fluidity as Record<BreakpointVariants, boolean>).some(
    (e) => e
  )
    ? css`
        max-width: ${p.theme.section.maxWidth.xl}px;
      `
    : ""}

    ${(p) => getStylesForbreakpoint(p, "sm")}

    ${(p) => getStylesForbreakpoint(p, "md")}

    ${(p) => getStylesForbreakpoint(p, "lg")}

    ${(p) => getStylesForbreakpoint(p, "xl")}
`;

export function getResponsiveSpace(
  hideGutter: ResponsiveProp<boolean>
): ResponsiveSpace {
  if (typeof hideGutter === "boolean") {
    return hideGutter ? "none" : "medium";
  } else if (hideGutter instanceof Array) {
    const { length } = hideGutter;
    if (length === 2) {
      const mobile = hideGutter[0] ? "none" : "medium";
      const desktop = hideGutter[1] ? "none" : "medium";
      return [mobile, desktop];
    }
  } else if (hideGutter instanceof Object) {
    return {
      xs:
        typeof hideGutter.xs === "boolean"
          ? hideGutter.xs
            ? "none"
            : "medium"
          : undefined,
      sm:
        typeof hideGutter.sm === "boolean"
          ? hideGutter.sm
            ? "none"
            : "medium"
          : undefined,
      md:
        typeof hideGutter.md === "boolean"
          ? hideGutter.md
            ? "none"
            : "medium"
          : undefined,
      lg:
        typeof hideGutter.lg === "boolean"
          ? hideGutter.lg
            ? "none"
            : "medium"
          : undefined,
      xl:
        typeof hideGutter.xl === "boolean"
          ? hideGutter.xl
            ? "none"
            : "medium"
          : undefined,
    };
  }
  return "none";
}

export function getResponsiveFluidity(
  fluidity?: FluidityVariant
): ResponsiveProp<boolean> {
  const responsiveFluidity: ResponsiveProp<boolean> = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  };
  if (typeof fluidity === "boolean") {
    Object.keys(responsiveFluidity).forEach(
      (bp) => (responsiveFluidity[bp as BreakpointVariants] = fluidity)
    );
  } else if (fluidity instanceof Array) {
    const { length } = fluidity;
    if (length === 2) {
      const mobile = fluidity[0];
      const desktop = fluidity[1];
      responsiveFluidity.xs = mobile;
      responsiveFluidity.sm = mobile;
      responsiveFluidity.md = mobile;
      responsiveFluidity.lg = desktop;
      responsiveFluidity.xl = desktop;
    }
  } else if (fluidity instanceof Object) {
    Object.keys(fluidity).forEach(
      (bp) =>
        (responsiveFluidity[bp as BreakpointVariants] = fluidity[
          bp as BreakpointVariants
        ]!)
    );
  }
  return responsiveFluidity;
}

export const Section = ({
  stretchY,
  hideGutter = defaultHideGutter,
  children,
  "data-id": dataId,
  paddingY = defaultPaddingY,
  backgroundColor = defaultBackgroundColor,
  fluidity,
  ...rest
}: SectionProps) => {
  return (
    <Box
      backgroundColor={backgroundColor}
      data-id={dataId}
      display="flex"
      height={stretchY ? "full" : undefined}
      paddingY={cardPaddingYForVariant[paddingY]}
      width="full"
    >
      <StyledBox
        {...rest}
        fluidity={getResponsiveFluidity(fluidity)}
        height={stretchY ? "full" : undefined}
        paddingX={getResponsiveSpace(hideGutter)}
        style={{ marginLeft: "auto", marginRight: "auto" }}
        width="full"
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
  hideGutter: defaultHideGutter,
  stretchY: false,
};

Section.displayName = "Section";
