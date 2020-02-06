import {colors} from '../colors';

export const MuiExpansionPanel = {
  root: {
    borderBottom: `1px solid ${colors.grey16}`,
    borderTop: `1px solid ${colors.grey16}`,
    '&:hover': {
      background: colors.grey4,
    },
    '&$expanded': {
      margin: 0,
    },
  },
  // disabled: {},
  // expanded: {},
  // rounded: {}
};

export const MuiExpansionPanelSummary = {
  root: {
    padding: '24px 0',
    color: colors.grey,
    '&:focusWithin': {
      background: colors.grey4,
    },
    '&$disabled': {
      // boxShadow: "none",
      border: 'none',
      '&:hover': {
        // boxShadow: "none",
        border: 'none',
      },
    },
    '&$expanded': {
      paddingBottom: 24,
      margin: 0,
    },
  },
  expandIcon: {
    // boxShadow: "none",
    border: 'none',
    width: 24,
    height: 24,
    color: colors.redPink,
    background: 'transparent',
    margin: '0 0 0 32px',
    '&:hover': {
      // boxShadow: "none",
      border: 'none',
    },
  },
  content: {
    fontStyle: 'Medium',
    fontSize: 14,
    lineHeight: '24px',
    textAlign: 'left',
    fontWeight: 500,
    display: 'block',
    color: colors.grey,
  },
  focused: {},
};

export const MuiExpansionPanelActions = {
  // root: {},
  // spacing: {},
};

export const MuiExpansionPanelDetails = {
  root: {
    padding: '0px 0px 24px 0px',
  },
};
