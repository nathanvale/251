import * as customIcons from "./custom";
import * as muiIcons from "./mui";

import { SvgIcon } from "./SvgIcon/SvgIcon";
import { SvgIconContext } from "./SvgIcon/SvgIconContext";

export type SvgIconProps = import("./SvgIcon/SvgIcon").SvgIconProps;

export { SvgIcon, SvgIconContext };

export * from "./custom";
export * from "./mui";

export const icons = {
  ...customIcons,
  ...muiIcons,
  SvgIcon,
};
