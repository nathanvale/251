import { Space, Theme, Transition } from "@origin-digital/ods-types";

const gridGutterWidth = 16;

const space: Space = [0, 4, 8, 12, 16, 24, 32, 48, 64];
space.none = space[0];
space.xxsmall = space[1];
space.xsmall = space[2];
space.small = space[3];
space.medium = space[4];
space.large = space[5];
space.xlarge = space[6];
space.xxlarge = space[7];
space.xxxlarge = space[8];

const transitions: Transition = {
  fast: "transform .15s ease, opacity .15s ease",
};

export const coreLayoutTheme: Theme = {
  space,
  gridGutterWidth,
  transitions,
  section: {
    maxWidth: {
      xs: 540,
      sm: 540,
      md: 720,
      lg: 960,
      xl: 1140,
    },
  },
};
