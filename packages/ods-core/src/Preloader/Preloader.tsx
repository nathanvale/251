import * as React from "react";
import clsx from "clsx";
import {
  ComponentBaseProps,
  GraphicColorVariants,
} from "@origin-digital/ods-types";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "../Box";

export interface PreloaderProps extends Omit<ComponentBaseProps, "children"> {
  color?: GraphicColorVariants;
}

const useBounceAnimation = makeStyles(
  () => ({
    "@keyframes bounce": {
      "0%": {
        transform: "translate(0, 0)",
      },
      "25%": {
        transform: "translate(0, -18px)",
      },
      "50%": {
        transform: "translate(0, 0)",
      },
      "100%": {
        transform: "translate(0, 0)",
      },
    },
    secondDelay: {
      animationDelay: "0.2s",
    },
    thirdDelay: {
      animationDelay: "0.4s",
    },
    fourthDelay: {
      animationDelay: "0.6s",
    },
    bounceEffect: {
      animationName: "$bounce",
      animationDuration: "1.5s",
      animationIterationCount: "infinite",
    },
  }),
  { classNamePrefix: "preloader-bounce" }
);

const usePreloaderStyles = makeStyles(
  (theme) => ({
    container: {
      minHeight: 32,
    },
    circle: ({ color }: { color?: GraphicColorVariants }) => ({
      width: 6,
      height: 6,
      borderWidth: 3,
      borderColor:
        color === "white"
          ? theme.palette.common.white
          : theme.palette.secondary.main,
      borderStyle: "solid",
      borderRadius: "50%",
      marginLeft: 9,
      marginRight: 9,
    }),
  }),
  { classNamePrefix: "preloader" }
);

export const Preloader = ({ color, className, ...rest }: PreloaderProps) => {
  const { circle, container } = usePreloaderStyles({ color });
  const {
    bounceEffect,
    secondDelay,
    thirdDelay,
    fourthDelay,
  } = useBounceAnimation();

  return (
    <Box
      display="flex"
      flexDirection="row"
      className={clsx(container, className)}
      alignItems="flex-end"
      {...rest}
    >
      <div className={clsx(circle, bounceEffect)} />
      <div className={clsx(circle, bounceEffect, secondDelay)} />
      <div className={clsx(circle, bounceEffect, thirdDelay)} />
      <div className={clsx(circle, bounceEffect, fourthDelay)} />
    </Box>
  );
};

Preloader.displayName = "Preloader";
Preloader.defaultProps = {
  color: "secondary",
  "data-id": "preloader",
};
