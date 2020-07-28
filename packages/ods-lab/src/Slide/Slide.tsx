import * as React from "react";
import MuiSlide, { SlideProps as ISlide } from "@material-ui/core/Slide";

export interface SlideProps extends ISlide {}

export const Slide = (props: SlideProps) => {
  const { children, ...other } = props;
  return (
    <MuiSlide {...other}>
      <div>{children}</div>
    </MuiSlide>
  );
};
