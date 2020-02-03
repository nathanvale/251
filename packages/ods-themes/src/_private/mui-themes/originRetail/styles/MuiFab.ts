import {colors} from '../colors';

export const MuiFab = {
  root: {
    textTransform: 'none',
    background: colors.white,
    fontStyle: 'Regular',
    width: 40,
    height: 40,
    fontSize: 14,
    lineHeight: '24px',
    color: colors.grey,
    boxShadow: 'none',
    borderRadius: '50%',
    '&:hover': {
      background: colors.grey4,
    },
    '&$disabled': {
      color: colors.lightGrey,
    },
    '&:active': {
      boxShadow: 'none',
    },
  },
  sizeSmall: {
    padding: '12px 16px',
    fontStyle: 'Medium',
    fontSize: 14,
    lineHeight: '16px',
  },
  sizeMedium: {
    width: 56,
    height: 56,
  },
  label: {
    fontsize: '18px',
    fontWeight: 500,
    width: 'auto',
    lineHeight: '32px',
    textAlign: 'center',
    color: colors.black,
  },
  extended: {
    background: colors.lightGreen,
    '&:hover': {
      background: colors.grey8,
    },
  },
  primary: {
    color: colors.grey,
    boxShadow: 'none',
    '&:active': {
      color: colors.grey,
    },
  },
  secondary: {},
  focusVisible: {},
  colorInherit: {},
};
