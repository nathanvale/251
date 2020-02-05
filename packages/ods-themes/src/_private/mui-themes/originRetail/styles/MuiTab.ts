import {colors} from '../colors';

export const MuiTab = {
  root: {
    borderBottom: `1px solid ${colors.grey16} !important`,
    backgroundColor: `${colors.white} !important`,
    padding: '24px 32px',
    fontStyle: 'Regular',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '24px',
    color: colors.grey,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: `${colors.grey4} !important`,
    },
    '&$selected': {
      fontWeight: `500 !important`,
      backgroundColor: colors.grey4,
    },
  },
  label: {},
  textColorPrimary: {
    color: colors.grey56,
  },
  textColorInherit: {
    color: colors.grey56,
  },
  selected: {},
  textColorSecondary: {},
  disabled: {},
  fullWidth: {},
  wrapped: {},
  wrapper: {},
  labelIcon: {},
};

export const MuiTabs = {
  root: {
    background: `${colors.white} !important`,
    backgroundColor: `${colors.white} !important`,
    marginBottom: 32,
  },
  scrollButtons: {
    color: `${colors.redPink} !important`,
  },
  indicator: {
    '& > div': {
      backgroundColor: colors.lightOrange,
      height: 4,
    },
  },
  vertical: {},
  flexContainer: {},
  flexContainerVertical: {},
  centered: {},
  scroller: {},
  fixed: {},
  scrollable: {},
  scrollButtonsDesktop: {},
};
