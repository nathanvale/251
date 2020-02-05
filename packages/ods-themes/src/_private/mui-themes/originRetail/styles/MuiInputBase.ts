import {colors} from '../colors';

export const MuiInputBase = {
  root: {
    height: 56,
    fontSize: 16,
    color: colors.greyTextField,
    background: colors.grey8,
    borderRadius: '4px 4px 0px 0px',
    borderColor: colors.grey48,
    fontFamily: ['gordita', 'Arial', 'Sans-Serif'].join(','),
    '&:hover': {
      borderColor: colors.grey80,
    },
    '&:active': {
      borderColor: colors.blue,
    },
    '&$error': {
      borderColor: colors.red,
    },
    '&$disabled': {
      borderColor: colors.grey16,
    },
  },
  input: {
    color: colors.grey,
    fontWeight: 400,
    marginBottom: -14,
    marginTop: 6,
    lineHeight: '1.25em',
  },
  focused: {
    color: colors.greyTextField,
  },
  formControl: {},
  disabled: {},
  adornedStart: {},
  adornedEnd: {},
  error: {},
  marginDense: {},
  multiline: {},
  colorSecondary: {},
  fullWidth: {},
  inputMarginDense: {},
  inputMultiline: {},
  inputTypeSearch: {},
  inputAdornedStart: {},
  inputAdornedEnd: {},
  inputHiddenLabel: {},
};
