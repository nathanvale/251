import {colors} from "../colors";
import {typography} from "../typography";

export const MuiFormLabel = {
  root: {
    marginBottom: 8,
    ...typography.text.xxsmall,
    fontWeight: typography.weight.regular,
    color: colors.grey56,
    "&.Mui-focused": {
      color: colors.mediumBlue,
    },
    "&$error": {
      color: colors.red,
    },
  },
  // error: {},
  // focused: {},
  // label: {},
  // colorSecondary: {},
  // filled: {},
  // required: {},
  // asterisk: {},
  // disabled: {},
};
