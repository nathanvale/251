import {colors} from "../colors";
import {typography} from "../typography";

export const MuiDialogTitle = {
  root: {
    fontStyle: typography.fontStyle.medium,
    ...typography.text.medium,
    color: colors.grey56,
    padding: "0 16px",
    margin: "0 16px",
  },
};

export const MuiDialogContent = {
  root: {
    fontStyle: typography.fontStyle.regular,
    fontWeight: typography.weight.regular,
    fontSize: 14,
    lineHeight: "24px",
    color: colors.grey,
    padding: "0 16px 16px",
    margin: "0 16px 24px",
  },
  // dividers: {}
};

export const MuiDialog = {
  root: {
    color: colors.lightOrange,
    border: `1px solid ${colors.grey16}`,
    borderRadius: "none",
    margin: 16,
  },
  paperWidthXs: {
    width: "100%",
  },
  paperWidthSm: {
    width: "500px",
  },
  paperWidthMd: {
    width: "800px",
  },
  paperWidthLg: {
    width: "800px",
  },
  paperWidthXl: {
    width: "800px",
  },
  // scrollPaper: {},
  // scrollBody: {},
  // container: {},
  // paper: {},
  // paperScrollPaper: {},
  // paperBody: {},
  // paperWidthFalse: {},
  // paperFullWidth: {},
  // paperFullScreen: {},
};
