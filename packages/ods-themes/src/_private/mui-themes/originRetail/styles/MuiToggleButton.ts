import { colors } from "../colors";
import { typography } from "../typography";

export const MuiToggleButton = {
  root: {
    backgroundColor: colors.white,
    border: `1px solid ${colors.grey200}`,
    borderRadius: "none",
    "&$selected": {
      border: `1px solid ${colors.secondary}`,
      backgroundColor: colors.yellow,
      fontWeight: `500 !important`,
      "&:hover": {
        outline: `4px solid ${colors.yellow16}`,
        zIndex: 11,
        backgroundColor: `${colors.yellow} !important`,
      },
      "&:focus": {
        outline: `4px solid ${colors.yellow24}`,
        zIndex: 11,
        backgroundColor: `${colors.yellow} !important`,
      },
      "&:active": {
        outline: `4px solid ${colors.yellow32}`,
        zIndex: 11,
        backgroundColor: `${colors.yellow} !important`,
      },
      "& > span.MuiToggleButton-label": {
        fontWeight: 600,
      },
    },
    "&:hover": {
      outline: `4px solid ${colors.grey50}`,
      zIndex: 10,
    },
    "&:focus": {
      outline: `4px solid ${colors.grey200}`,
      zIndex: 10,
    },
    "&:active": {
      outline: `4px solid ${colors.grey200}`,
      zIndex: 10,
    },
  },
  label: {
    ...typography.text.large,
    textAlign: "center",
    color: colors.grey500,
    fontWeight: typography.weight.regular,
  },
  // selected: {}
};
