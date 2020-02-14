/* eslint-disable import/no-unused-modules */
import {
  Breakpoint,
  SpaceTShirts,
  SpaceVariants,
  Breakpoints,
  BreakpointVariants,
  Space,
  Color,
  ColorVariants,
  Shadow,
  ShadowVariants,
  Border,
  Transform,
  TransformVariants,
  Transition,
  TransitionVariants,
  Typography,
  Theme,
} from "@origin-digital/ods-types";

import {} from "styled-components/cssprop";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface DefaultTheme extends Theme {}
}
