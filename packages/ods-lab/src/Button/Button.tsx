import * as React from "react";
import MuiButton, {ButtonProps as IButton} from "@material-ui/core/Button";

export interface ButtonProps extends IButton {
  "data-id"?: string;
  // inverseBlack?: boolean;
}

// const useStyles = makeStyles({
//   inverseBlack: {
//     color: colors.white,
//     background: colors.grey56,
//     border: `1px solid ${colors.white}`,
//     '&:hover': {
//       color: colors.grey56,
//       background: colors.white,
//       border: `1px solid ${colors.grey56}`,
//     },
//   },
// });

export const Button = (props: ButtonProps) => {
  // const { inverseBlack, children, className, ...other} = props;
  const {children, ...other} = props;
  return (
    <MuiButton
      // className={inverseBlack ? styles.inverseBlack : className}
      {...other}
    >
      {children}
    </MuiButton>
  );
};
