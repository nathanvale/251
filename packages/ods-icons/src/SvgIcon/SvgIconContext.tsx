import { createContext } from "react";
import { SvgIconToneVariants } from "@origin-digital/ods-types";
import { defaultColor } from "./SvgIcon";

export const SvgIconContext = createContext<SvgIconToneVariants>(defaultColor);
