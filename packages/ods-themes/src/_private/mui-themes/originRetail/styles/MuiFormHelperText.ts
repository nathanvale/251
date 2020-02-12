import {colors} from "../colors";

export const MuiFormHelperText = {
  root: {
    color: colors.grey80,
    fontSize: 12,
    lineHeight: "20px",
    marginTop: 0, // For radio button
    marginLeft: 32, // For radio button
    marginBottom: 4, // For radio button
    "&$error": {
      color: colors.red, // check if i need this as inheritance from Input
      marginLeft: 0,
      marginTop: 4,
    },
    "&.Mui-focused": {
      color: colors.grey80,
    },
    "&$disabled": {
      color: colors.greyTextDisabled,
    },
  },
  // disabled: {},
  // marginDense: {},
  // contained: {},
  // focused: {},
  // filled: {},
  // required: {}
};
