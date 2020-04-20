import { createContext } from "react";
import { UseTextProps } from "./Text";

export const TextContext = createContext<UseTextProps | false>(false);
