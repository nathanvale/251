import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import { IconButton } from "../IconButton/IconButton";
import { Grid, Icon, PaginationHolder } from "..";

const useStyles = makeStyles({
  chevron: {
    padding: 8,
  },
});

export interface PaginationProps {
  pages: number;
  page: number;
  changePage: (val: number) => void;
  "data-id"?: string;
}

export const Pagination = (props: PaginationProps) => {
  const classes = useStyles({});

  const handlePage = (value: number) => {
    props.changePage(value);
  };

  const handleStart = () => {
    props.changePage(1);
  };

  const handleEnd = () => {
    props.changePage(props.pages);
  };

  const checkDisabled = (type: string) => {
    return type === "start"
      ? props.page === 1 || props.pages === 1
      : type === "end"
      ? props.page === props.pages
      : false;
  };

  const startDisabled = checkDisabled("start");
  const endDisabled = checkDisabled("end");

  return (
    <Grid container justify="flex-start" direction="row" alignContent="center">
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <Grid
          container
          justify="center"
          direction="row"
          alignContent="center"
          alignItems="center"
        >
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <IconButton
              color="inherit"
              onClick={handleStart}
              className={classes.chevron}
              disabled={startDisabled}
            >
              <Icon
                color={startDisabled ? "disabled" : "secondary"}
                fontSize="small"
              >
                skip_previous
              </Icon>
              <Icon
                color={startDisabled ? "disabled" : "secondary"}
                fontSize="small"
              >
                skip_previous
              </Icon>
            </IconButton>
          </Grid>
          {props.pages && (
            <PaginationHolder
              data-id={props["data-id"]}
              page={props.page}
              pages={props.pages}
              handlePage={handlePage}
            />
          )}
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <IconButton
              color="inherit"
              onClick={handleEnd}
              className={classes.chevron}
              disabled={endDisabled}
            >
              <Icon
                color={endDisabled ? "disabled" : "secondary"}
                fontSize="small"
              >
                skip_next
              </Icon>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
