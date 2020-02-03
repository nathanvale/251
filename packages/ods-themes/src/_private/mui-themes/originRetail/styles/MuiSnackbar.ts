import {MuiBreakpoints} from './MuiBreakpoints';

export const MuiSnackbar = {
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    '& > div': {
      width: '100%',
    },
    [`@media (max-width:${MuiBreakpoints.values.sm}px)`]: {
      left: 0,
      right: 0,
    },
  },
};
