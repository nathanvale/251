import {colors} from '../colors';

export const MuiRadio = {
  root: {
    border: 'none',
    // boxShadow: "none",
    color: colors.grey,
    '& .MuiSvgIcon': {
      color: colors.grey,
      fontSize: '24px',
    },
    '&:hover': {
      border: 'none',
      // boxShadow: "none",
      background: colors.grey8,
    },
    '&:focus': {
      background: colors.yellow16,
    },
    '&$checked': {
      color: `${colors.lightOrange} !important`,
    },
    '&:disabled': {
      color: colors.grey16,
    },
  },
  colorPrimary: {
    color: colors.lightOrange,
  },
  // checked: {},
};
