import React, { ReactNode } from "react";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { style } from "styled-system";
import Typography from "@material-ui/core/Typography";
import { Variant as MUITypographyVariants } from "@material-ui/core/styles/createTypography";
import { BoxProps, Box } from "@origin-digital/ods-core";
import makeStyles from "@material-ui/core/styles/makeStyles";

export type TextToneVariants = "neutral" | "critcal" | "positive";
export type TextWeightVariants = "regular" | "medium" | "strong";

export const textColor = style({
  prop: "color",
  key: "colors",
});
type TextVariants =
  | "subtitle"
  | "subtitle-small"
  | "body"
  | "body-small"
  | "caption"
  | "overline-text";
export interface TextProps {
  children?: ReactNode;
  component?: "span" | "p";
  variant?: TextVariants;
  tone?: TextToneVariants;
  weight?: TextWeightVariants;
  align?: BoxProps["textAlign"];
  truncate?: boolean;
  "data-id"?: string;
}

const typographyVariants: Record<TextVariants, MUITypographyVariants> = {
  body: "body1",
  "body-small": "body2",
  "overline-text": "overline",
  subtitle: "subtitle1",
  "subtitle-small": "subtitle2",
  caption: "caption",
};

const getToneVariants = (
  theme: Theme,
): Record<TextToneVariants, React.CSSProperties["color"]> => ({
  neutral: theme.palette.grey[500],
  critcal: theme.palette.critical.main,
  positive: theme.palette.positive.main,
});

const getWeightVariants = (
  theme: Theme,
): Record<TextWeightVariants, React.CSSProperties["fontWeight"]> => ({
  regular: theme.typography.fontWeightRegular,
  medium: theme.typography.fontWeightMedium,
  strong: theme.typography.fontWeightBold,
});

const useTextStyle = makeStyles((theme: Theme) => {
  return {
    root: ({ tone, weight }: TextProps) => ({
      color: getToneVariants(theme)[tone!],
      fontWeight: getWeightVariants(theme)[weight!],
      display: "block",
    }),
  };
});

export const Text = (props: TextProps) => {
  const {
    children,
    component = "span",
    variant,
    truncate,
    align,
    "data-id": dataId,
  } = props;
  const classes = useTextStyle(props);
  const content = truncate ? (
    <Box
      data-id={dataId}
      component="span"
      display="block"
      overflow="hidden"
      style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}
    >
      {children}
    </Box>
  ) : (
    children
  );

  return (
    <Box textAlign={align}>
      <Typography
        classes={classes}
        variant={typographyVariants[variant!]}
        component={component}
      >
        {content}
      </Typography>
    </Box>
  );
};

Text.defaultProps = {
  "data-id": "text",
  component: "span",
  variant: "body",
  tone: "neutral",
};

Text.displayName = "Text";
