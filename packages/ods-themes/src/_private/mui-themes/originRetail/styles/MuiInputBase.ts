import { colors } from "../colors";

export const MuiInputBase = {
  root: {
    height: 56,
    fontSize: 16,
    color: colors.greyTextField,
    background: colors.grey50,
    borderRadius: "4px 4px 0px 0px",
    borderColor: colors.grey300,
    fontFamily: ["gordita", "Arial", "Sans-Serif"].join(","),
    "&:hover": {
      borderColor: colors.grey400,
    },
    "&:active": {
      borderColor: colors.promote,
    },
    "&$error": {
      borderColor: colors.primary,
    },
    "&$disabled": {
      borderColor: colors.grey200,
    },
    "&:focus": {
      color: colors.greyTextField,
    },
    "&$focused": {
      color: colors.greyTextField,
    },
  },
  input: {
    color: colors.grey500,
    fontWeight: 400,
    marginBottom: -14,
    marginTop: 6,
    lineHeight: "1.25em",
  },
  // focused: {},
  // formControl: {},
  // disabled: {},
  // adornedStart: {},
  // adornedEnd: {},
  // error: {},
  // marginDense: {},
  // multiline: {},
  // colorSecondary: {},
  // fullWidth: {},
  // inputMarginDense: {},
  // inputMultiline: {},
  // inputTypeSearch: {},
  // inputAdornedStart: {},
  // inputAdornedEnd: {},
  // inputHiddenLabel: {}
};
