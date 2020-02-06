import {colors} from '../colors';

export const MuiSelect = {
  root: {
    '&$error': {
      color: colors.red,
    },
    '&:focus': {
      '.MuiInputBase-root': {
        background: colors.greyHover,
      },
    },
    '&$disabled': {
      background: colors.greyDisabled,
      borderColor: colors.grey16,
      '&$icon': {
        color: colors.greyIcon,
      },
    },
  },
  icon: {
    fontSize: '24px',
    marginRight: 16,
    '&$disabled': {
      color: colors.greyIcon,
    },
  },
  iconOpen: {
    fontSize: '24px',
    marginRight: 16,
    '&$disabled': {
      color: colors.greyIcon,
    },
  },
  iconFilled: {
    fontSize: '24px',
    marginRight: 16,
    '&$disabled': {
      color: colors.greyIcon,
    },
  },
  iconOutlined: {
    fontSize: '24px',
    marginRight: 16,
    '&$disabled': {
      color: colors.greyIcon,
    },
  },
  // disabled: {},
  // error: {},
};
