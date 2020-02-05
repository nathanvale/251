import {colors} from '../colors';

export const MuiIcon = {
  root: {
    color: colors.lightOrange,
    fontSize: '48px',
    '&:active': {
      color: colors.white,
    },
  },
  fontSizeSmall: {
    fontSize: '24px',
  },
  fontSizeLarge: {
    fontSize: '64px',
  },
  fontSizeInherit: {
    fontSize: '88px',
  },
  colorPrimary: {
    color: colors.grey,
    '&:active': {
      background: colors.transparent,
      color: colors.grey,
    },
  },
  colorSecondary: {
    color: colors.redPink,
    '&:hover': {
      background: colors.transparent,
    },
    '&:active': {
      color: colors.white,
      background: colors.redPink,
    },
  },
  colorDisabled: {
    color: colors.grey24,
  },
  colorError: {
    color: colors.redPink,
    background: colors.transparent,
  },
  colorAction: {
    color: colors.lightGreen,
  },
};
