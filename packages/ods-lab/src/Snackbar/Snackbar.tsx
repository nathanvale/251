import * as React from "react";
import MuiSnackbar, {
  SnackbarProps as ISnackbar,
} from "@material-ui/core/Snackbar";
import makeStyles from "@material-ui/styles/makeStyles";

export interface SnackbarProps extends ISnackbar {
  topOffset?: number;
  bottomOffset?: number;
  leftOffset?: number;
  rightOffset?: number;
}

const useStyles = makeStyles({
  root: {
    top: (props: SnackbarProps) => props.topOffset,
    left: (props: SnackbarProps) => props.leftOffset,
    bottom: (props: SnackbarProps) => props.bottomOffset,
    right: (props: SnackbarProps) => props.rightOffset,
  },
});

export const Snackbar = (props: SnackbarProps) => {
  const styles = useStyles(props);
  return (
    <MuiSnackbar className={styles.root} {...props}>
      <div>{props.children}</div>
    </MuiSnackbar>
  );
};
