import * as React from "react";
import { Theme } from "@material-ui/core";
import MuiButton, { ButtonProps as IButton } from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export interface ButtonProps extends IButton {
  "data-id"?: string;
}

const useButtonStyle = makeStyles((theme: Theme) => {
  const grey = theme.palette.secondary.main;
  const red = theme.palette.primary.main;
  const darkRed = theme.palette.primary.dark;
  const darkGrey = theme.palette.secondary.dark;

  return {
    root: {
      display: "inline",
      borderRadius: 0,
      textTransform: "none",
      padding: "18px 24px",
      ...theme.typography.button,
      "&$disabled": {
        color: theme.palette.grey[200],
      },
      width: "fit-content",
    },
    sizeSmall: {
      padding: "12px 16px",
    },
    containedPrimary: {
      backgroundColor: red,
      color: theme.palette.common.white,
      borderRadius: 0,
      "&:hover": {
        backgroundColor: darkRed,
      },
    },
    containedSecondary: {
      backgroundColor: grey,
      color: theme.palette.common.white,
      borderRadius: 0,
      border: `1px solid ${grey}`,
      "&:hover": {
        backgroundColor: darkGrey,
        color: theme.palette.common.white,
        border: `1px solid ${darkGrey}`,
        "& .MuiIcon-colorPrimary": {
          color: theme.palette.common.white,
        },
      },
    },
    label: {
      color: theme.palette.common.white,
      ...theme.typography.text.xsmall,
      display: "block",
      textTransform: "none",
    },
    outlinedPrimary: {
      color: red,
      backgroundColor: theme.palette.common.white,
      borderRadius: 0,
      border: `1px solid ${red}`,
      "&:hover": {
        backgroundColor: darkRed,
        color: theme.palette.common.white,
        border: `1px solid ${darkRed}`,
      },
    },
    outlinedSecondary: {
      color: grey,
      backgroundColor: theme.palette.common.white,
      borderRadius: 0,
      border: `1px solid ${grey}`,
      "&:hover": {
        backgroundColor: grey,
        color: theme.palette.common.white,
        border: `1px solid ${grey}`,
        "& .MuiIcon-root": {
          color: theme.palette.common.white,
        },
      },
    },
    textPrimary: {
      color: red,
      backgroundColor: theme.palette.common.white,
      borderRadius: 0,
      "&:hover": {
        backgroundColor: darkRed,
        color: theme.palette.common.white,
      },
    },
    textSecondary: {
      color: grey,
      backgroundColor: theme.palette.common.white,
      borderRadius: 0,
      "&:hover": {
        backgroundColor: theme.palette.grey[200], //grey200
      },
    },
  };
});

export const Button = (props: ButtonProps) => {
  // const { inverseBlack, children, className, ...other} = props;
  const { children, ...other } = props;
  const classes = useButtonStyle(props);
  return (
    <MuiButton classes={classes} {...other}>
      {children}
    </MuiButton>
  );
};
