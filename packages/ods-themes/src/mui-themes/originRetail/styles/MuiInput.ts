import { colors } from "../colors";

export const MuiInput = {
  root: {
    height: 56,
    fontSize: 16,
    paddingLeft: 12,
    lineHeight: "18px",
    background: colors.transparent,
    color: colors.greyTextField,
    borderColor: colors.grey300,
    "&:hover": {
      borderColor: colors.grey400,
      borderHeight: "1px",
    },
    "&:active": {
      borderColor: colors.promote,
    },
    "&$error": {
      borderColor: colors.primary,
    },
    "&$disabled": {
      borderColor: colors.grey200,
      color: colors.greyTextDisabled,
      background: colors.transparent,
    },
  },
  underline: {
    "&$disabled": {
      "&:before": {
        borderBottomStyle: "solid",
        borderColor: "#e3e3e3",
      },
    },
  },
  formControl: {
    "label + &": {
      marginTop: 0,
    },
  },
  // disabled: {},
  // focused: {},
  // error: {},
  // colorSecondary: {},
  // marginDense: {},
  // multiline: {},
  // fullWidth: {},
  // input: {},
  // inputMarginDense: {},
  // inputMultiline: {},
  // inputTypeSearch: {}
};
