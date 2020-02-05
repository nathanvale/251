import {colors} from '../colors';

export const MuiAlert = {
  root: {
    padding: '16px 16px',
  },
  message: {
    fontSize: 14,
    lineHeight: '24px',
    paddingTop: 3,
  },
  action: {
    color: `${colors.redPink} !important`,
    paddingLeft: 16,
    paddingRight: 0,
    alignItems: 'flex-start',
    '&:hover': {
      color: colors.veryDarkRed,
    },
  },
  standardError: {
    color: colors.veryDarkRed,
    background: colors.redBackground,
    border: `1px solid ${colors.redBorder}`,
    '& .MuiAlertTitle-root': {
      color: colors.veryDarkRed,
    },
    '& .MuiSvgIcon-root': {
      color: colors.redPink,
      '&:hover': {
        color: colors.veryDarkRed,
      },
    },
  },
  icon: {
    padding: 0,
    color: colors.redPink,
  },
};
