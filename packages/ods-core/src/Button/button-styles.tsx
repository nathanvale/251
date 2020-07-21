import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import {
  darken,
  fade,
  lighten,
} from "@material-ui/core/styles/colorManipulator";
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
  ResponsiveProp,
} from "@origin-digital/ods-types";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { mapToStyledSystem } from "@origin-digital/ods-helpers";

const getHoverBG = (color: string) => {
  return darken(color, 0.16);
};
const getHoverBGInverse = (color: string) => {
  return lighten(color, 0.84);
};
const getHoverBGInverseFade = (color: string) => {
  return fade(color, 0.24);
};
const getDisabledBG = (color: string) => {
  return lighten(color, 0.68);
};
const getDisabled16BG = (color: string) => {
  return lighten(color, 0.84);
};

/**
 * This function receives the responsive with Prop and returns JSS responsive styles for the css "width" property.
 * @param theme
 * @param fullWidthArray
 */
const getArrayFullWidthStyles = (
  theme: Theme,
  fullWidthArray: (boolean | null)[]
) => {
  return theme.breakpoints.keys.reduce(
    (curStyles, bp: Breakpoint, index: number) => {
      curStyles[theme.breakpoints.up(bp)] = {
        width: fullWidthArray[index] ? "100%" : "auto",
      };
      return curStyles;
    },
    {} as any
  );
};

/**
 * fullWidth Prop is responsive. This function returns correct responsive `width` in the styles based on
 * the value of fullWidth (whether it is boolean, boolean[] or Object format).
 * The style is then used in the root style rule to apply the width on the button.
 * @param theme
 * @param fullWidth
 */
const getFullWidthStyles = (
  theme: Theme,
  fullWidth?: ResponsiveProp<boolean>
) => {
  if (!fullWidth) {
    return {
      width: "auto",
    };
  }
  const normFullWidth = mapToStyledSystem(fullWidth);
  if (typeof normFullWidth === "boolean") {
    return {
      width: normFullWidth ? "100%" : "auto",
    };
  } else if (normFullWidth instanceof Array) {
    return getArrayFullWidthStyles(theme, normFullWidth);
  } else {
    return {
      width: "auto",
    };
  }
};

/**
 * These root styles are common between normal and inverse buttons. It includes below logics:
 * - taking care of responsive fullWidth prop
 * - Padding logic:
 *   - based on the size (small / large)
 *   - icon is rendered (padding left is reduced)
 *   - variant outline has 1px smaller paddings to cater for borders
 * - Margin top / left: When the variant is text, we would like the text of the button to align with the rest of the
 * page. Hence we need to cancel out the left padding. Similarly the top padding. This is done by adding negative
 * margins when the variant="text" only. It still appreciates Layout components (e.g. Column and Stack) in the sense
 * that they can override these margins if they need to.
 * @param theme
 */
const getCommonStyleRules = (theme: Theme) => ({
  root: ({
    size,
    variant,
    hasIcon,
    noTextPadding,
    fullWidth,
  }: {
    size: ButtonSize;
    variant: ButtonVariant;
    hasIcon: boolean;
    noTextPadding?: boolean;
    fullWidth?: ResponsiveProp<boolean>;
  }) => {
    const fullWidthStyles = getFullWidthStyles(theme, fullWidth);

    //Handle padding for different button sizes and whether there is an icon or not.
    let [pt, pr, pb, pl] = [12, 24, 12, 24];
    if (size === "small" && hasIcon) {
      [pt, pr, pb, pl] = [12, 12, 12, 8];
    } else if (size === "small" && !hasIcon) {
      [pt, pr, pb, pl] = [12, 16, 12, 16];
    } else if (size === "medium" && hasIcon) {
      [pt, pr, pb, pl] = [12, 20, 12, 16];
    }

    // Outline has a border, so we need to subtract 1 pixel off each padding to have overall width of the button the same
    // as contained and text variants.
    if (variant === "outlined") {
      [pt, pr, pb, pl] = [pt - 1, pr - 1, pb - 1, pl - 1];
    }

    // Make sure we provide a specific CSS selector for the button label so that global resets do not override it.
    // Refer to https://origindd.atlassian.net/browse/ODS-221 for details.
    const buttonTypography = {
      "& > span.MuiButton-label": {
        fontWeight: theme.typography.button.fontWeight,
      },
    };

    if (noTextPadding && variant === "text") {
      return {
        padding: `${pt}px ${pr}px ${pb}px ${pl}px`,
        marginLeft: `-${pl}px`,
        marginRight: `-${pr}px`,
        marginTop: `-${pb}px`,
        marginBottom: `-${pb}px`,
        ...fullWidthStyles,
        ...buttonTypography,
      };
    }

    return {
      padding: `${pt}px ${pr}px ${pb}px ${pl}px`,
      ...fullWidthStyles,
      ...buttonTypography,
    };
  },
  sizeSmall: {
    fontSize: "14px",
    lineHeight: "16px",
  },
  iconSizeSmall: {
    "& > *:first-child": {
      fontSize: "16px",
      width: 16,
      height: 16,
    },
  },
});

export const useButtonStyles = makeStyles(
  (theme: Theme) => {
    return {
      ...getCommonStyleRules(theme),
      contained: {
        color: theme.palette.common.white,
        "&$disabled": {
          color: theme.palette.common.white,
        },
      },
      containedPrimary: {
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: getHoverBG(theme.palette.primary.main),
        },
        "&$disabled": {
          backgroundColor: getDisabledBG(theme.palette.primary.main),
        },
      },
      containedSecondary: {
        backgroundColor: theme.palette.grey[500],
        "&:hover": {
          backgroundColor: getHoverBG(theme.palette.grey[500]),
        },
        "&$disabled": {
          backgroundColor: getDisabledBG(theme.palette.grey[500]),
        },
      },

      outlined: {
        backgroundColor: "transparent",
        "&$disabled": {
          backgroundColor: "transparent",
        },
      },
      outlinedPrimary: {
        "&$disabled": {
          color: getDisabledBG(theme.palette.primary.main),
          border: `1px solid ${getDisabled16BG(theme.palette.primary.main)}`,
        },
      },
      outlinedSecondary: {
        color: theme.palette.grey[500],
        border: `1px solid ${fade(theme.palette.grey[500], 0.5)}`,
        "&:hover": {
          border: `1px solid ${theme.palette.grey[500]}`,
          backgroundColor: fade(
            theme.palette.grey[500],
            theme.palette.action.hoverOpacity
          ),
        },
        "&$disabled": {
          color: getDisabledBG(theme.palette.grey[500]),
          border: `1px solid ${getDisabled16BG(theme.palette.grey[500])}`,
        },
      },

      textSecondary: {
        color: theme.palette.grey[500],
        "&:hover": {
          backgroundColor: fade(
            theme.palette.grey[500],
            theme.palette.action.hoverOpacity
          ),
        },
      },
      disabled: {},
    };
  },
  { classNamePrefix: "Button" }
);

export const useInverseStyles = makeStyles(
  (theme: Theme) => {
    return {
      ...getCommonStyleRules(theme),
      contained: {
        backgroundColor: theme.palette.common.white,
        "&$disabled": {
          color: theme.palette.grey[300],
          backgroundColor: darken(theme.palette.grey[500], 0.16),
        },
      },
      containedPrimary: {
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: getHoverBGInverse(theme.palette.primary.main),
        },
      },
      containedSecondary: {
        color: theme.palette.grey[500],
        "&:hover": {
          backgroundColor: getHoverBGInverse(theme.palette.grey[500]),
        },
      },

      outlined: {
        color: theme.palette.common.white,
        border: `1px solid ${fade(theme.palette.common.white, 0.5)}`,
        "&:hover": {
          border: `1px solid ${theme.palette.common.white}`,
          backgroundColor: getHoverBGInverseFade(theme.palette.grey[500]),
        },
        "&&$disabled": {
          color: theme.palette.grey[500],
          backgroundColor: "transparent",
          border: `1px solid ${theme.palette.grey[500]}`,
        },
      },

      text: {
        color: theme.palette.common.white,
        "&:hover": {
          backgroundColor: getHoverBGInverseFade(theme.palette.grey[500]),
        },
        "&$disabled": {
          color: theme.palette.grey[500],
        },
      },

      disabled: {},
    };
  },
  { classNamePrefix: "Button-inverse" }
);

export const useSpinnerStyles = makeStyles(
  (theme: Theme) => ({
    spinner: ({
      color = "primary",
      size = "medium",
      variant = "contained",
    }: {
      color: ButtonColor;
      size: ButtonSize;
      variant: ButtonVariant;
    }) => {
      let spinnerColor =
        color === "primary"
          ? theme.palette.primary.main
          : theme.palette.grey[500];

      if (variant === "contained") {
        spinnerColor = getHoverBG(spinnerColor);
      }

      return {
        color: spinnerColor,
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: size === "small" ? -10 : -12,
        marginLeft: size === "small" ? -10 : -12,
      };
    },
  }),
  { classNamePrefix: "button" }
);
