import {colors} from '../colors';

export const MuiInput = {
  root: {
    height: 56,
    fontSize: 16,
    paddingLeft: 12,
    lineHeight: '18px',
    background: colors.transparent,
    color: colors.greyTextField,
    borderColor: colors.grey48,
    '&:hover': {
      borderColor: colors.grey80,
      borderHeight: '1px',
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
  disabled: {
    color: '#9d9d9d',
    background: colors.transparent,
  },
  underline: {
    '&$disabled': {
      '&:before': {
        borderBottomStyle: 'solid',
        borderColor: '#e3e3e3',
      },
    },
  },
  formControl: {
    'label + &': {
      marginTop: 0,
    },
  },
  focused: {},
  error: {},
  colorSecondary: {},
  marginDense: {},
  multiline: {},
  fullWidth: {},
  input: {},
  inputMarginDense: {},
  inputMultiline: {},
  inputTypeSearch: {},
};
