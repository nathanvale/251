import { colors } from "../colors";
import { typography } from "../typography";

export const MuiInputLabel = {
  root: {
    ...typography.text.xsmall,
    color: colors.greyTextField,
    fontWeight: typography.weight.regular,
    paddingLeft: 12,
    "&$error": {
      color: colors.primary,
    },
    "&$disabled": {
      color: colors.greyTextDisabled,
    },
    "&:focus": {
      color: colors.mediumBlue,
    },
    "&$focused": {
      color: colors.mediumBlue,
    },
  },
  shrink: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: "14px",
    transform: "translate(0, 1.5px)",
    "&$disabled": {
      color: colors.grey300,
    },
  },
  // focused: {},
  // disabled: {},
  // error: {},
  // required: {},
  // asterisk: {},
  // formControl: {},
  // marginDense: {},
  // animated: {},
  // filled: {},
  // outlined: {}
};
