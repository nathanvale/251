import {colors} from '../colors';

export const MuiRadio = {
  root: {
    border: 'none',
    boxShadow: 'none',
    color: colors.grey,
    '&:hover': {
      border: 'none',
      boxShadow: 'none',
      background: colors.grey8,
    },
    '&:focus': {
      background: colors.yellow16,
    },
    '&:checked': {
      color: `${colors.lightOrange} !important`,
    },
    '&:disabled': {
      color: colors.grey16,
    },
  },
  checked: {
    color: colors.lightOrange,
  },
  colorPrimary: {
    color: colors.lightOrange,
  },
};
