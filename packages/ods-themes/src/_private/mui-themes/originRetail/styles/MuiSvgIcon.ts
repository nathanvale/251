import {colors} from '../colors';

export const MuiSvgIcon = {
  root: {
    color: colors.lightOrange,
    fontSize: '48px',
  },
  colorPrimary: {
    color: colors.grey,
    '&:active': {
      background: colors.transparent,
      color: colors.white,
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
  colorError: {
    color: colors.redPink,
    background: colors.transparent,
  },
  colorAction: {
    color: colors.lightGreen,
  },
  colorDisabled: {
    color: colors.grey24,
  },
  fontSizeInherit: {
    fontSize: '88px',
  },
  fontSizeSmall: {
    fontSize: '24px',
  },
  fontSizeLarge: {
    fontSize: '64px',
  },
};
