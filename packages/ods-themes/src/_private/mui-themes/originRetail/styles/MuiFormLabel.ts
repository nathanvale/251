import {colors} from '../colors';

export const MuiFormLabel = {
  root: {
    marginBottom: 8,
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 500,
    color: colors.grey56,
    '&.Mui-focused': {
      color: colors.mediumBlue,
    },
    '&$error': {
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
