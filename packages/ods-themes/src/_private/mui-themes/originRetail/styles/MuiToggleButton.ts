import {colors} from '../colors';

export const MuiToggleButton = {
  root: {
    backgroundColor: colors.white,
    border: `1px solid ${colors.grey16}`,
    borderRadius: 'none',
    '&$selected': {
      border: `1px solid ${colors.lightOrange}`,
      backgroundColor: colors.yellow,
      fontWeight: `500 !important`,
      '&:hover': {
        outline: `4px solid ${colors.yellow16}`,
        zIndex: 11,
        backgroundColor: `${colors.yellow} !important`,
      },
      '&:focus': {
        outline: `4px solid ${colors.yellow24}`,
        zIndex: 11,
        backgroundColor: `${colors.yellow} !important`,
      },
      '&:active': {
        outline: `4px solid ${colors.yellow32}`,
        zIndex: 11,
        backgroundColor: `${colors.yellow} !important`,
      },
      '& > span.MuiToggleButton-label': {
        fontWeight: 600,
      },
    },
    '&:hover': {
      outline: `4px solid ${colors.grey8}`,
      zIndex: 10,
    },
    '&:focus': {
      outline: `4px solid ${colors.grey16}`,
      zIndex: 10,
    },
    '&:active': {
      outline: `4px solid ${colors.grey24}`,
      zIndex: 10,
    },
  },
  label: {
    lineHeight: '24px',
    fontSize: '14px',
    textAlign: 'center',
    color: colors.grey,
    fontWeight: 300,
  },
  selected: {},
};
