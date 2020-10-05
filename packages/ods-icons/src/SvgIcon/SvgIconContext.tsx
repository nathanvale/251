import { createContext } from "react";
import { SvgIconColorVariants } from "@origin-digital/ods-types";
import { defaultColor } from "./SvgIcon";

export const SvgIconContext = createContext<SvgIconColorVariants>(defaultColor);
