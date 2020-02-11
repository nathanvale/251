import {colors} from "../colors";

export const MuiIconButton = {
  root: {
    color: colors.lightOrange,
    border: `1px solid ${colors.grey16}`,
    background: colors.transparent,
    margin: 0,
    boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.4)",
    fontSize: "48px",
    "&:hover": {
      boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.4)",
      fontSize: "64px",
    },
    "&$disabled": {
      color: colors.grey24,
    },
  },
  colorInherit: {
    border: "none",
    boxShadow: "none",
    padding: "16px 16px 0 0",
    "&:hover": {
      border: "none",
      // boxShadow: "none",
      background: "transparent",
    },
    "&:active": {
      background: colors.transparent,
    },
  },
  colorSecondary: {
    color: colors.redPink,
  },
  // label: {},
  // edgeStart: {},
  // edgeEnd: {},
  // colorPrimary: {},
  // sizeSmall: {},
};
