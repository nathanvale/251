import React, { useContext } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import {
  TypographyVariants,
  TypographyWeightVariants,
  Heading12Variants,
  Heading34Variants,
  TextVariants,
  ColorVariants,
} from "@origin-digital/ods-types";
import clsx from "clsx";
import { Box } from "@material-ui/core";
import { HeadingContext } from "../../Heading/HeadingContext";
import { useBackgroundColor } from "../../Box/BackgroundContext";
import { TextContext } from "../../Text/TextContext";
import { UseTextProps } from "../../Text/Text";

export interface UseBasekickStylesProps {
  variant: TextVariants | Heading12Variants | Heading34Variants;
}

export interface UseTruncatedContentProps {
  truncate: boolean;
  children: React.ReactNode;
  display: string;
}

/**
 * Maps our Text and Heading component variants to the MUI typography theme
 */
export function getTypographyForVariant(
  typography: Theme["typography"]
): Record<TypographyVariants, CSSProperties> {
  return {
    body: typography.body1,
    "body-small": typography.body2,
    "overline-text": typography.overline,
    "subtitle-small": typography.subtitle2,
    subtitle: typography.subtitle1,
    caption: typography.caption,
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
    h4: typography.h4,
  };
}
/**
 * Used for applying font weights.
 */
export function useWeightStyles(weight: TypographyWeightVariants) {
  const getWeightVariants = (
    theme: Theme
  ): Record<TypographyWeightVariants, React.CSSProperties["fontWeight"]> => ({
    regular: theme.typography.fontWeightRegular,
    medium: theme.typography.fontWeightMedium,
    bold: theme.typography.fontWeightBold,
  });
  return makeStyles(
    (theme: Theme) => ({
      weight: {
        fontWeight: getWeightVariants(theme)[weight],
      },
    }),
    { classNamePrefix: `typography-${weight}` }
  )().weight;
}

/**
 * Used for applying text color. Neutral is an abstract text color tone that needs
 * to map to grey500
 */
export function useToneStyles({
  tone = "neutral",
}: {
  tone: ColorVariants | "neutral";
}) {
  const { colors } = useTheme<Theme>();
  const color = colors[tone === "neutral" ? "grey500" : tone];
  return makeStyles(
    {
      color: {
        color,
      },
    },
    { classNamePrefix: `typography-${tone}` }
  )().color;
}

/**
 * In CSS, the text in a given element will sit centred within its own
 * line-height. In the design world the line height is measured from the
 * baseline of the text. As a result our UIs often deviate from the designers
 * intentions, requiring a heap of pixel-nudging to get things to line up again.
 *
 * This hook gets CSS transforms from our typography theme so we can translate
 * the text back onto the baseline where it should be.
 */
export function useBasekickStyles({ variant }: UseBasekickStylesProps) {
  return makeStyles(
    ({ breakpoints, typography }) => {
      const responsiveFontSize: Record<"h1" | "h2" | "h3", any> = {
        h1: {
          [breakpoints.up("lg")]: {
            fontSize: "56px",
            lineHeight: "64px",
          },
        },
        h2: {
          [breakpoints.up("lg")]: {
            fontSize: "32px",
            lineHeight: "40px",
          },
        },
        h3: {
          [breakpoints.up("lg")]: {
            fontSize: "20px",
            lineHeight: "28px",
          },
        },
      };
      let responsiveBasekick = {};
      if (variant === "h1" || variant === "h2" || variant === "h3") {
        // h1, h2 and h3 have a larger font size at the desktop breakpoint
        responsiveBasekick = responsiveFontSize[variant!];
      }
      return {
        basekick: {
          fontFamily: typography.fontFamily,
          ...getTypographyForVariant(typography)[variant!],
          display: "block",
          ...responsiveBasekick,
        },
      };
    },
    { classNamePrefix: `typography-${variant}-variant` }
  )().basekick;
}

/**
 * This is a helper hook that lets a consumer know when they are using a
 * typography component on an invalid background
 */
export function useCheckTypographyBackground() {
  const backgroundColor = useBackgroundColor();
  const hasValidBackground =
    backgroundColor === "white" ||
    backgroundColor === "backgroundDefault" ||
    backgroundColor === "transparent" ||
    backgroundColor === "grey50" ||
    !backgroundColor;
  if (!hasValidBackground && process.env.NODE_ENV !== "production") {
    throw new Error(
      `Typography background colors must be "white", "backgroundDefault", "transparent" or "undefined`
    );
  }
  return backgroundColor;
}

/**
 * Used for applying truncate styles
 */
export function useTruncateStyles() {
  return makeStyles(
    {
      truncate: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      },
    },
    { classNamePrefix: "typography" }
  )().truncate;
}

/**
 * This style is used in case a user uses html strong instead of our Strong component
 */
export function useStrongStyles(
  weight: Exclude<TypographyWeightVariants, "regular">
) {
  const getWeightVariants = (
    theme: Theme
  ): Record<Exclude<TypographyWeightVariants, "regular">, any> => ({
    medium: { fontWeight: theme.typography.fontWeightMedium },
    bold: { fontWeight: theme.typography.fontWeightBold },
  });
  return makeStyles(
    (theme: Theme) => ({
      "strong-support": {
        "& > strong": getWeightVariants(theme)[weight!],
      },
    }),
    { classNamePrefix: "typography" }
  )()["strong-support"];
}

/**
 * Link reset styles
 */
export function useLinkResetStyles() {
  return makeStyles(
    () => {
      return {
        linkReset: {
          color: "inherit",
          margin: 0,
          padding: 0,
          border: 0,
          boxSizing: "border-box",
          cursor: "pointer",
          verticalAlign: "baseline",
          textDecoration: "underline",
          background: "none",
          outline: "none",
        },
      };
    },
    { classNamePrefix: "typography" }
  )().linkReset;
}

/**
 * Styles for the TextLinkRenderer component
 */
export function useTextLinkStyles() {
  const inText = useContext(TextContext);
  const inHeading = useContext(HeadingContext);
  let tone: UseTextProps["tone"] | "grey600";
  if (inText) {
    tone = inText.tone;
  }
  if (inHeading) {
    tone = "grey600";
  }
  const linkResetStyles = useLinkResetStyles();
  const textLinkStyles = makeStyles(
    ({ colors }) => {
      const hoverColor =
        tone === "neutral" || tone === "grey600"
          ? colors.primary
          : colors[`${tone}Dark`];
      return {
        link: {
          fontSize: "100%",
          font: "inherit",
          "&:hover": {
            textDecoration: "none",
            color: hoverColor,
          },
        },
      };
    },
    { classNamePrefix: `typography-${tone}-tone` }
  )().link;
  return clsx(linkResetStyles, textLinkStyles);
}
/**
 * Wraps a div around a typography component that needs to be truncated
 */
export const useTruncatedContent = ({
  truncate,
  children,
  display = "block",
}: UseTruncatedContentProps) => {
  const truncateStyles = useTruncateStyles();

  return truncate ? (
    <Box display={display} overflow="hidden" className={truncateStyles}>
      {children}
    </Box>
  ) : (
    children
  );
};
