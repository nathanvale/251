import {colors} from '../colors';

export const MuiInputLabel = {
  root: {
    fontSize: 16,
    lineHeight: '18px',
    color: colors.greyTextField,
    fontWeight: 400,
    paddingLeft: 12,
    '&$error': {
      color: colors.red,
    },
    '&$disabled': {
      color: colors.greyTextDisabled,
    },
  },
  focused: {
    color: colors.mediumBlue,
  },
  shrink: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: '14px',
    transform: 'translate(0, 1.5px)',
    '&$disabled': {
      color: colors.grey48,
    },
  },
  disabled: {},
  error: {},
  required: {},
  asterisk: {},
  formControl: {},
  marginDense: {},
  animated: {},
  filled: {},
  outlined: {},
};
