import {colors} from '../colors';

export const MuiLink = {
  root: {
    fontSize: '14px',
    lineHeight: '24px',
    textDecoration: 'underline',
  },
  underlineNone: {
    color: `${colors.grey} !important`,
    '&:hover': {
      color: `${colors.red} !important`,
      textDecoration: 'none',
    },
  },
  underlineHover: {},
  underlineAlways: {},
  button: {},
  focusVisible: {},
};
