// No shadows allowed at the top level - will implement at component level as needed
import { Shadows } from "@material-ui/core/styles/shadows";

export const shadows = [...Array(25)].map(() => "none") as Shadows;
