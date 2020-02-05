import {colors} from '../colors';

export const MuiTable = {
  root: {},
  stickyHeader: {},
};

export const MuiTableHead = {
  root: {
    color: colors.grey,
    fontSize: '14px',
    lineHeight: '24px',
    border: `1px solid ${colors.grey16}`,
    borderLeft: 'none',
    borderRight: 'none',
    padding: '12px 16px',
  },
};

export const MuiTableRow = {
  root: {
    '&:nthOfType(odd)': {
      background: colors.grey8,
    },
  },
  selected: {},
  hover: {},
  head: {},
  footer: {},
};

export const MuiTableBody = {
  root: {},
};

export const MuiTableCell = {
  root: {
    lineHeight: '24px',
    border: `1px solid ${colors.grey16}`,
    borderLeft: 'none',
    borderRight: 'none',
    padding: '12px 16px',
    color: colors.grey,
    '&:last-child': {
      paddingRight: 10, // Override other random style applied
    },
  },
  head: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: colors.grey,
  },
  body: {
    fontSize: '14px',
    color: colors.grey,
  },
  paddingCheckbox: {
    paddingRight: 10, // Override other random style applied
    padding: '4px 10px',
  },
  paddingNone: {},
  footer: {},
  sizeSmall: {},
  alignLeft: {},
  alignCenter: {},
  alignRight: {},
  alignJustify: {},
  stickyHeader: {},
};
