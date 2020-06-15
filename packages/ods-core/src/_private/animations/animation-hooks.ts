import { makeStyles } from "@material-ui/core/styles";
import { AnimationHookProps } from "@origin-digital/ods-types";

export const DEFAULT_ANIMATION_DURATION = 500;
export const useHeadshakeAnimation = ({
  duration = DEFAULT_ANIMATION_DURATION,
  easing,
}: AnimationHookProps) => {
  return makeStyles((theme) => ({
    "head-shake-animation": {
      animation: `$headshake ${duration}ms ${
        easing ?? theme.transitions.easing.easeInOut
      }`,
    },
    "@keyframes headshake": {
      "0%": {
        transform: "translateX(0)",
      },
      "6.5%": {
        transform: "translateX(-6px) rotateY(-9deg)",
      },
      "18.5%": {
        transform: "translateX(5px) rotateY(7deg)",
      },
      "31.5%": {
        transform: "translateX(-3px) rotateY(-5deg)",
      },
      "43.5%": {
        transform: "translateX(2px) rotateY(3deg)",
      },
      "50%": {
        transform: "translateX(0)",
      },
    },
  }))()["head-shake-animation"];
};

export const useBounceInAnimation = ({
  duration = DEFAULT_ANIMATION_DURATION,
}: AnimationHookProps) => {
  return makeStyles({
    "bounce-in-animation": {
      animation: `$bounceIn ${duration}ms`,
    },
    "@keyframes bounceIn": {
      "from, 50%, 67%, to": {
        "animation-timing-function": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
      },
      "0%": {
        opacity: 0,
        transform: "scale3d(.3, .3, .3)",
      },
      "50%": {
        opacity: 1,
        transform: "scale3d(1.1, 1.1, 1.1)",
      },
      to: {
        opacity: 1,
        transform: "scale3d(1, 1, 1)",
      },
    },
  })()["bounce-in-animation"];
};

export const useFadeInAnimation = ({
  duration = DEFAULT_ANIMATION_DURATION,
}: AnimationHookProps) => {
  return makeStyles({
    "fade-in-animation": {
      animation: `$fadeIn ${duration}ms`,
    },
    "@keyframes fadeIn": {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
  })()["fade-in-animation"];
};
