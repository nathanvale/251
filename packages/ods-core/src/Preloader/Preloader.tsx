import * as React from "react";
import clsx from "clsx";
import {
  ComponentBaseProps,
  GraphicToneVariants,
} from "@origin-digital/ods-types";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "../Box";

export interface PreloaderProps
  extends Omit<ComponentBaseProps, "children" | "disabled"> {
  tone?: GraphicToneVariants;
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
    circle: ({ tone }: { tone?: GraphicToneVariants }) => ({
      width: 6,
      height: 6,
      borderWidth: 3,
      borderColor:
        tone === "white"
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

export const Preloader = (preloaderProps: PreloaderProps) => {
  const { tone } = preloaderProps;
  const { circle, container } = usePreloaderStyles({ tone });
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
      className={container}
      alignItems="flex-end"
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
  tone: "secondary",
  "data-id": "preloader",
};
