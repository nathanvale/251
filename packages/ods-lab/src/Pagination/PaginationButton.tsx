import * as React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import { Button } from "@origin-digital/ods-core";
import { AllColors } from "../AllColors/AllColors";
import { Grid } from "../Grid/Grid";

const useStyles = makeStyles({
  select: {
    border: `2px solid ${AllColors.redPink}`,
    boxShadow:
      "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), " +
      "0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
  },
});

export interface PaginationButtonProps {
  selected: boolean;
  index: number;
  handleClick: (value: number) => void;
  children: React.ReactNode;
}

// This button needs to be the Fab button but I haven't built it yet
export const PaginationButton = (props: PaginationButtonProps) => {
  const styles = useStyles({});
  return (
    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
      <Button
        variant="outlined"
        onClick={() => props.handleClick(props.index)}
        className={props.selected ? styles.select : undefined}
      >
        {props.children}
      </Button>
    </Grid>
  );
};
