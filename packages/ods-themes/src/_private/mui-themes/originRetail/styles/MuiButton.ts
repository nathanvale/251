import {colors} from '../colors';
import {typography} from '../typography';

export const MuiButton = {
  root: {
    borderRadius: 0,
    textTransform: 'none',
    padding: '12px 24px',
    fontStyle: typography.fontStyle.medium,
    ...typography.text.xsmall,
    '&$disabled': {
      color: colors.lightGrey,
    },
  },
  sizeSmall: {
    padding: '12px 16px',
    fontStyle: typography.fontStyle.medium,
    ...typography.text.xsmall,
  },
  containedPrimary: {
    backgroundColor: colors.red,
    color: colors.white,
    borderRadius: 0,
    '&:hover': {
      backgroundColor: colors.darkRed,
    },
  },
  containedSecondary: {
    backgroundColor: colors.grey,
    color: colors.white,
    borderRadius: 0,
    border: `1px solid ${colors.grey}`,
    '&:hover': {
      backgroundColor: colors.darkGrey,
      color: colors.white,
      border: `1px solid ${colors.darkGrey}`,
      '& .MuiIcon-colorPrimary': {
        color: colors.white,
      },
    },
  },
  label: {
    textTransform: 'none',
  },
  outlinedPrimary: {
    color: colors.red,
    backgroundColor: colors.white,
    borderRadius: 0,
    border: `1px solid ${colors.red}`,
    '&:hover': {
      backgroundColor: colors.darkRed,
      color: colors.white,
      border: `1px solid ${colors.darkRed}`,
    },
  },
  outlinedSecondary: {
    color: colors.grey,
    backgroundColor: colors.white,
    borderRadius: 0,
    border: `1px solid ${colors.grey}`,
    '&:hover': {
      backgroundColor: colors.grey,
      color: colors.white,
      border: `1px solid ${colors.grey}`,
      '& .MuiIcon-root': {
        color: colors.white,
      },
    },
  },
  textPrimary: {
    color: colors.red,
    backgroundColor: colors.white,
    borderRadius: 0,
    '&:hover': {
      backgroundColor: colors.darkRed,
      color: colors.white,
    },
  },
  textSecondary: {
    color: colors.grey,
    backgroundColor: colors.white,
    borderRadius: 0,
    '&:hover': {
      backgroundColor: colors.grey16,
    },
  },
  // flatPrimary: {
  //   backgroundColor: colors.white,
  //   color: colors.red,
  //   borderRadius: 0,
  //   '&:hover': {
  //     backgroundColor: colors.lightRed
  //   },
  // },
  // flatSecondary: {
  //   color: colors.grey,
  //   borderRadius: 0,
  //   '&:hover': {
  //     backgroundColor: colors.grey16,
  //   },
  // },
  // text: {},
  // textSizeSmall: {},
  // textSizeLarge: {},
  // outlinedSizeSmall: {},
  // outlinedSizeLarge: {},
  // containedSizeSmall: {},
  // containedSizeLarge: {},
  // sizeLarge: {},
  // fullWidth: {},
  // startIcon: {},
  // endIcon: {},
  // iconSizeSmall: {},
  // iconSizeMedium: {},
  // iconSizeLarge: {},
};
